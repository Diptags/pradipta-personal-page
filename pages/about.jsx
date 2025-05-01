import { PageTitle, SeoMetadata } from "@/components";
import Link from "next/link";
import { ChevronsRight, MoveUpRight } from "lucide-react";
import { aboutPageData, site_metadata } from "@/constants";
import { blue_3 } from "@/constants/colors";

const About = () => {
  const { title, name, about, current_activities, interest, my_hobbies, my_journey } = aboutPageData;
  const { about: metaAbout, desc: metaDesc } = site_metadata;

  return (
    <section className="sm:max-w-3xl">
      {/* SEO Metadata */}
      <SeoMetadata title={metaAbout.title} desc={metaDesc} />

      {/* Page Title */}
      <PageTitle title={title} effect="blue" />

      {/* Introduction */}
      <div className="">
        <p
          className="info text-justify"
          dangerouslySetInnerHTML={{
            __html: `Greetings! I'm <span class="font-bold">${name}</span>, ${about}`,
          }}
        />
      </div>

      {/* What I am Doing Now */}
      <div className="my-8">
        <h2 className="sub_heading">📝 Now</h2>
        <p className="info text-justify">{current_activities}</p>
      </div>

      {/* My Hobbies */}
      <div className="my-8">
        <h2 className="sub_heading">🎈 What I'm Into</h2>
        <p className="info text-justify">{interest.title}</p>
        <ul>
          {interest.list.map((interest, index) => (
            <p key={index} className="info text-justify my-2 flex gap-3">
              <ChevronsRight size={15} color={blue_3} />
              <span>{interest}</span>
            </p>
          ))}
        </ul>
      </div>

      {/* My Hobbies */}
      <div className="my-2">
        <h2 className="sub_heading">🎯 Hobbies</h2>
        <p className="info text-justify">{my_hobbies}</p>
      </div>

      {/* My Learning Journey */}
      <div className="my-10">
        <h2 className="sub_heading">🚀 My Learning Journey</h2>
        <p
          className="info text-justify"
          dangerouslySetInnerHTML={{
            __html: `${my_journey}`,
          }}
        />
      </div>

      {/* Link to Skills Page */}
      <Link className="inline-block" href="/skills">
        <button className="btn_link" type="button">
          My Skills & Knowledge
          <MoveUpRight size={18} />
        </button>
      </Link>
    </section>
  );
};

export default About;
