import React from "react";
import { X } from "lucide-react";
import Image from "next/image";

export const ProjectModal = ({ toggleModal, project }) => {
  return (
    <div className="project_modal_container">
      <div className="project_modal">
        <button
          onClick={toggleModal}
          className="absolute right-4 top-2 bg-light_3 text-dark_2 rounded p-1"
        >
          <X size={20} />
        </button>
        <div className="mt-4 mb-2">
          <h3 className="sub_heading">
            🎨 The Story of Building <span className="text text-orange_3">{project?.details?.title}</span>
          </h3>
          <p className="info text-sm text-justify">{project?.details?.desc || ""}</p>
        </div>

        {/* Feature */}
        <div className="mt-4">
          <h4 className="sub_heading">Main Features</h4>
          <ul className="">
            {project?.details?.features.map(feature => (
              <li key={feature} className="ml-4 my-2 text-sm">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Showcase */}
        <div className="mt-4">
          <h4 className="sub_heading">Showcase</h4>
          <Image
          className="w-fulls rounded-lg"
            src={project?.showcase}
            width={1920}
            height={1080}
            alt={project?.name || "Project Showcase"}
          />
        </div>
      </div>
    </div>
  );
};
