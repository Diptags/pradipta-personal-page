import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { PageTitle, SeoMetadata } from "@/components";
import { skillPageData, site_metadata } from "@/constants";

const Skills = () => {
  const { title, skills, others, intro } = skillPageData;

  return (
    <section className="sm:max-w-3xl">
      <SeoMetadata
        title={site_metadata?.skill?.title}
        desc={site_metadata?.skill?.desc}
      />
      <PageTitle title={title} effect="blue" />
      <p className="info text-justify">{intro}</p>

      {/* Skill List */}
      <div className="my-6 md:w-12/12">
        <h2 className="sub_heading text-center">What I Bring to the Table ⚡</h2>
        <ul className="mt-4 grid grid-cols-6 ">
          {skills?.map(skill => (
            <li
              key={skill.id}
              className="group flex flex-col justify-center items-center"
            >
              <Image
                className={`transition duration-500 hover:scale-125`}
                src={`/images/${skill.icon}`}
                width={40}
                height={40}
                alt={skill.name}
              />
              <span className="text_tiny font-light opacity-0 group-hover:opacity-100">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Have Strong Foundation */}
      <div className="my-6">
        <h2 className="sub_heading text-center">
          Have a strong foundation in 💪
        </h2>
        <ul className="mt-4 flex justify-center items-center flex-wrap gap-2">
          {others?.map(skill => (
            <li key={skill.name} className="px-4 py-1 bg-gray-700/10 rounded shadow-2xl flex gap-2 items-center dark:bg-gray-800">
              <span>{skill.icon}</span>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      <Link className="mt-10 inline-block" href="/projects">
        <button className="btn_link" type="button">
          Previous Projects
          <MoveUpRight size={18} />
        </button>
      </Link>
    </section>
  );
};

export default Skills;
