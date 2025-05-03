import Link from "next/link";
import { Github, ExternalLink, Info } from "lucide-react";
import Image from "next/image";
import { ProjectModal } from "@/components";
import { useState } from "react";

// These for dynamic style
const badge = [
  "badge_react",
  "badge_tailwind",
  "badge_react_query",
  "badge_nextjs",
  "badge_firebase",
  "badge_node",
  "badge_mongo",
];

export const ProjectCard = ({ project }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal((curr) => !curr);
  };

  return (
    <li className="group project_card">
      <div onClick={toggleModal}>
        <div className="overflow-hidden">
          <Image
            className="w-full rounded-t-2xl transition duration-500 group-hover:scale-105"
            src={project?.cover}
            width={600}
            height={300}
            alt={project?.name || "Project Cover"}
          />
        </div>

        {/* Project Info */}
        <div className="p-4 relative">
          <div className="mb-2 border-b-[.7px] border-gray-700/20">
            <p className="text-xl font-poppins-bold">{project?.name}</p>
            <div className="my-2 flex gap-2 flex-wrap">
              {project?.technologies?.map((tech) => (
                <span key={tech.name} className={tech.style}>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="project_card_gradient"></div>
            <p className="text-justify">{project?.desc}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <ul className="pb-4 pr-4 flex gap-4 justify-end items-center gap-2">
        {/* GitHub Link */}
        <li>
          <Link
            target="_blank"
            href={project?.links?.github || ""}
            aria-label={`View ${project?.name || "project"} on GitHub`}
          >
            <button
              className="cursor-pointer transition duration-300 hover:scale-125"
              type="button"
              aria-label="Project Repository URL"
            >
              <Github size={25} />
            </button>
          </Link>
        </li>

        {/* Live Demo Link */}
        <li>
          <Link
            target="_blank"
            href={project?.links?.live || ""}
          >
            <button
              className="cursor-pointer transition duration-300 hover:scale-125"
              type="button"
              aria-label="Project Live URL"
            >
              <ExternalLink size={25} />
            </button>
          </Link>
        </li>

        {/* More Info Button */}
        <li>
          <button
            onClick={toggleModal}
            className="cursor-pointer transition duration-300 hover:scale-125"
            type="button"
            aria-label="Project Detail"
          >
            <Info size={25} />
          </button>
        </li>
      </ul>

      {openModal && (
        <ProjectModal project={project} toggleModal={toggleModal} />
      )}
    </li>
  );
};
