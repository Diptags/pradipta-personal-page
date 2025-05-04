import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { PageTitle, SeoMetadata } from "@/components";
import { skillPageData, site_metadata } from "@/constants";
import { FooterButton } from "@/components/shared/FooterButton";
import links from "@/constants/page-data/links";

const SkillList = ({ title, skills }) => (
  <div className="my-8">
    <h2 className="sub_heading text-center">{title}</h2>
    <ul className="mt-4 grid grid-cols-6">
      {skills?.map((skill) => (
        <li
          key={skill.id}
          className="group flex flex-col justify-center items-center"
        >
          <Image
            className="transition duration-500 hover:scale-125"
            src={`/images/${skill.icon}`}
            width={40}
            height={40}
            alt={`skill-${skill.name}`}
          />
          <span className="text_tiny font-light opacity-0 group-hover:opacity-100">
            {skill.name}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const FoundationList = ({ title, foundations }) => (
  <div className="my-8">
    <h2 className="sub_heading text-center">{title}</h2>
    <ul className="mt-4 flex justify-center items-center flex-wrap gap-2">
      {foundations?.map((skill) => (
        <li
          key={skill.name}
          className="px-4 py-1 bg-gray-700/10 rounded shadow-2xl flex gap-2 items-center"
        >
          <span>{skill.icon}</span>
          {skill.name}
        </li>
      ))}
    </ul>
  </div>
);

const SideNote = ({ title, note, linkedinLink }) => (
  <div className="my-8">
    <h2 className="sub_heading text-center">{title}</h2>
    <p className="info text-justify">{note}</p>
    <div className="flex justify-center items-center mt-5">
      <Link target="_blank" href={linkedinLink}>
        <button className="btn_linkedin" type="button">
          LinkedIn Profile
          <Linkedin size={18} />
        </button>
      </Link>
    </div>
  </div>
);

const Skills = () => {
  const {
    title,
    stack_title,
    foundation_title,
    side_note_title,
    intro,
    skills,
    others,
    side_note,
  } = skillPageData;

  return (
    <section className="sm:max-w-3xl">
      {/* SEO Metadata */}
      <SeoMetadata
        title={site_metadata?.skill?.title}
        desc={site_metadata?.skill?.desc}
      />

      {/* Page Title */}
      <PageTitle title={title} effect="blue" />

      {/* Introduction */}
      <p className="info text-justify">{intro}</p>

      {/* Skill List */}
      <SkillList title={stack_title} skills={skills} />

      {/* Strong Foundation */}
      <FoundationList title={foundation_title} foundations={others} />

      {/* Side Note */}
      <SideNote
        title={side_note_title}
        note={side_note}
        linkedinLink={links.linkedin}
      />

      {/* Link to the Projects Page */}
      <FooterButton path="/projects" title="Previous Projects" />
    </section>
  );
};

export default Skills;
