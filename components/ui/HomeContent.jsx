import {
  Linkedin,
  Github,
  Gitlab,
  Download,
  ChevronsRight,
  MousePointerClick
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { homePageData } from "@/constants";

export const HomeContent = () => {
  const pageAnim = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-30%)" }
  });
  const { photo, greeting, tagline, intro, status, socials, buttons, resumelink } = homePageData;

  return (
    <section className="relative min-h-screen md:flex md:justify-center md:items-center sm:max-w-3xl">
      {/* Gradient Effect */}
      <div className="gradient_effect"></div>

      <animated.div className="transition duration-100 " style={pageAnim}>
        <div className="md:flex md:gap-6 md:flex-row-reverse md:justify-between">
          {/* Photo Profile Section */}
          <div className="w-32 md:w-auto flex flex-col items-center">
            <Image
              src={photo.url || ""}
              width={300}
              height={300}
              alt={photo.alt || "Rd Pradipta Gitaya Samadji"}
            />

            {/* Download Resume CTA */}
            <Link href={resumelink || ""} target="_blank">
              <button className="resume_btn mt-4" type="button">
                <Download size={20} />
                {buttons[0]}
              </button>
            </Link>
          </div>

          {/* Text Content Section */}
          <div className="md:flex-1">
            <span className="leading-7  flex items-center gap-2 font-light">
              {greeting}
              <Image
                src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
                width={20}
                height={20}
                alt="Waving Hand"
              />
            </span>
            <h1 className="text-black text-2xl font-poppins-bold">
              {tagline}
            </h1>

            <p className="text-justify my-6 leading-7 font-light">
              {intro}
            </p>

            {/* My Status  */}
            <div className="my-4 text-sm font-light">
              {status.map((status, index) => (
                <p key={index} className="text-justify my-2 flex gap-2">
                  <ChevronsRight size={17} />
                  <span>{status}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Socials CTA */}
        <div className="ml-6 md:m-0 md:flex md:gap-4 md:items-center">
          <div className="mt-10 md:m-0 flex items-center gap-2">
            {socials.map((platform, index) => (
              <Link target="_blank" key={index} href={platform.link || ""}>
                <button className="social_icon" type="button">
                  {platform.name === "linkedin" ? (
                    <Linkedin />
                  ) : platform.name === "gitlab" ? (
                    <Gitlab />
                  ) : (
                    <Github />
                  )}
                </button>
              </Link>
            ))}
          </div>

          {/* About Me CTA */}
          <div className="flex items-center gap-2 flex-wrap mt-10 md:m-0">
            <Link href="/about">
              <button className="work_btn" type="button">
                <MousePointerClick size={16} />
                {buttons[1]}
              </button>
            </Link>
          </div>
        </div>
      </animated.div>
    </section>
  );
};
