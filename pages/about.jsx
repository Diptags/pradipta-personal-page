import { PageTitle, SeoMetadata } from "@/components";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { aboutPageData, site_metadata } from "@/constants";

const About = () => {
  const { title, name, about, what_i_love, my_hobbies, apps_i_use, my_journey } = aboutPageData;
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

      {/* What I Love */}
      <div className="my-10">
        <h2 className="sub_heading">😍 What I Love</h2>
        <p className="info text-justify">{what_i_love}</p>
      </div>

      {/* My Hobbies */}
      <div className="my-2">
        <h2 className="sub_heading">🎯 My Hobbies</h2>
        <p className="info text-justify">{my_hobbies}</p>
      </div>

      {/* Apps I Use Daily */}
      <div className="my-10">
        <h2 className="sub_heading">🛸 Apps I Use Daily</h2>
        <p className="info text-justify">{apps_i_use}</p>
      </div>

      {/* My Learning Journey */}
      <div className="my-10">
        <h2 className="sub_heading">🚀 My Learning Journey</h2>
        <p className="info text-justify">{my_journey}</p>
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
