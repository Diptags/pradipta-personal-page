import Image from "next/image";
import Link from "next/link";
import { Linkedin, MoveUpRight } from "lucide-react";
import { PageTitle, SeoMetadata } from "@/components";
import { skillPageData, site_metadata } from "@/constants";
import links from "@/constants/page-data/links";

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
      <div className="my-8">
        <h2 className="sub_heading text-center">{stack_title}</h2>
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

      {/* Strong Foundation */}
      <div className="my-8">
        <h2 className="sub_heading text-center">{foundation_title}</h2>
        <ul className="mt-4 flex justify-center items-center flex-wrap gap-2">
          {others?.map((skill) => (
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

      {/* Side Note */}
      <div className="my-8">
        <h2 className="sub_heading text-center">{side_note_title}</h2>
        <p className="info text-justify">{side_note}</p>

        {/* LinkedIn Button */}
        <div className="flex justify-center items-center mt-5">
          <Link target="_blank" href={links.linkedin}>
            <button className="btn_linkedin" type="button">
              LinkedIn Profile
              <Linkedin size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Link to Projects */}
      <Link href="/projects">
        <button className="btn_link" type="button">
          Previous Projects
          <MoveUpRight size={18} />
        </button>
      </Link>

    </section>
  );
};

export default Skills;
