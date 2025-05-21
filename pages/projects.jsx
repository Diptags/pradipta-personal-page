import { PageTitle, ProjectCard, ProjectList, SeoMetadata } from "@/components";
import { FooterButton } from "@/components/shared/FooterButton";
import { projectPageData, site_metadata } from "@/constants";

const { title, projects } = projectPageData;

const renderProjects = () => {
  return projects?.map((project) => {
    if (project.flags.is_full_version) {
      return <ProjectCard key={project.id} project={project} />;
    }
    return <ProjectList key={project.id} {...project} />;
  });
};

const Project = () => {
  return (
    <section className="sm:max-w-3xl">
      <SeoMetadata
        title={site_metadata?.project?.title}
        desc={site_metadata?.project?.desc}
      />
      <PageTitle title={title} effect="blue" />
      <p className="info text-justify">{projectPageData?.intro}</p>
      <div className="my-5">
        <ul className="mt-4 space-y-4 md:grid md:grid-cols-2 md:items-stretch md:space-y-0 md:gap-6">
          {renderProjects()}
        </ul>
      </div>

      {/* Link to the Blogs Page */}
      <FooterButton path="/blogs" title="My Blog Posts" />
    </section>
  );
};

export default Project;
