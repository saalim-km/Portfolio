import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  type: string;
  image: string;
  sourceUrl: string;
  description: string;
  technologies: { name: string; icon: string }[];
}

const ProjectCard = ({
  title,
  type,
  image,
  sourceUrl,
  description,
  technologies,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative rounded-t-lg aspect-video group overflow-hidden">
        <img
          src={image}
          alt={`${title} thumbnail`}
          className="rounded-t-lg object-cover z-20"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <a
          href={sourceUrl}
          target="_blank"
          className="bg-black/80 border border-transparent rounded-t-lg absolute z-30 inset-0 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2"
        >
          {/* GitHub SVG icon */}
          <Github className="text-white"/>
          <span className="text-white">View Source</span>
        </a>
        <div className="absolute inset-0 rounded-t-lg w-full  z-10" />
      </div>

      <div className="rounded-b-lg bg-[#121212] p-5 text-white w-full">
        <h3 className="text-2xl font-semibold mb-2 flex items-center">
          {title}
          <span className="ml-4 bg-[#222222] text-sm rounded-full px-2 py-1">
            {type}
          </span>
        </h3>
        <p className="text-sm lg:text-base mb-4">{description}</p>

        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
          {technologies.map(({ name, icon }) => (
            <div
              key={name}
              className="flex items-center bg-[#222222] text-sm pl-2 pr-4 py-2 rounded-lg"
            >
              <img
                src={icon}
                alt={`${name} icon`}
                width={24}
                height={24}
                className="w-5 h-5 sm:h-6 sm:w-6 mr-2 object-cover flex-shrink-0"
              />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
