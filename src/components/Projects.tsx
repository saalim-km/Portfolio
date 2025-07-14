import { projects } from "../utils/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-8 md:px-16 lg:px-28 md:py-24 bg-darkSecondary"
    >
      <div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl mb-8 sm:mb-12 font-medium text-white animate-opacity">
          Notable Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
