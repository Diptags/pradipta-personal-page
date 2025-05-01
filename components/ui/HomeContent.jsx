import { Download, ChevronsRight, Phone, Linkedin, Instagram, Github, Gitlab } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { homePageData } from "@/constants";
import { orange_3 } from "@/constants/colors";

const socialIcons = {
  Linkedin: <Linkedin />,
  Github: <Github />,
  Gitlab: <Gitlab />,
  Instagram: <Instagram />,
};

const ProfilePhoto = ({ photo }) => (
  <div className="flex flex-col items-center my-2">
    <Image
      src={photo.url || ""}
      width={200}
      height={200}
      alt={photo.alt || "Profile Photo"}
    />
  </div>
);

const SocialIcons = ({ socials }) => (
  <ul className="flex justify-center items-center gap-3 my-2">
    {socials?.map((platform) => (
      <li key={platform.id} className="social_icon">
        <Link href={platform.link} target="_blank">
          {socialIcons[platform.name] || <Github />}
        </Link>
      </li>
    ))}
  </ul>
);

const GreetingSection = ({ greeting, tagline, intro }) => (
  <div className="flex-1">
    <span className="leading-7 flex items-center gap-2 font-light">
      {greeting}
      <Image
        src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
        width={20}
        height={20}
        alt="Waving Hand"
      />
    </span>
    <h1 className="text-black text-2xl font-poppins-bold">{tagline}</h1>
    <p className="font-poppins-medium text-justify my-6 leading-7 font-light">
      {intro}
    </p>
  </div>
);

const StatusSection = ({ status }) => (
  <div className="md:my-4 text-sm font-light">
    {status.map((item, index) => (
      <p key={index} className="text-justify my-2 flex gap-2">
        <ChevronsRight size={15} color={orange_3} />
        <span>{item}</span>
      </p>
    ))}
  </div>
);

const CallToActionButtons = ({ links, buttons }) => (
  <div className="mt-5 flex items-center gap-4">
    <Link href={links.resume} target="_blank">
      <button className="resume_btn" type="button">
        <Download size={15} />
        {buttons[0]}
      </button>
    </Link>
    <Link target="_blank" href={links.whatsapp}>
      <button className="whatsapp_me_btn" type="button">
        <Phone size={15} />
        {buttons[1]}
      </button>
    </Link>
  </div>
);

export const HomeContent = () => {
  const pageAnim = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-30%)" },
  });

  const { photo, greeting, tagline, intro, status, buttons, links, socials } =
    homePageData;

  return (
    <section className="relative min-h-screen md:flex md:justify-center md:items-center sm:max-w-3xl">
      <animated.div className="transition duration-100" style={pageAnim}>
        <div className="gap-5 md:flex-row-reverse md:justify-between flex flex-col items-center">

          <div className="flex flex-col item-center">
            <ProfilePhoto photo={photo} />
            <SocialIcons socials={socials} />
          </div>
          <div>
            <GreetingSection
              greeting={greeting}
              tagline={tagline}
              intro={intro}
            />
            <StatusSection status={status} />
          </div>
        </div>
        <CallToActionButtons links={links} buttons={buttons} />
      </animated.div>
    </section>
  );
};
