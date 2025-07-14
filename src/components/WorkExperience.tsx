import React from "react";

// Tech stack with high-quality icons matching the reference image
const techIcons = {
  nodejs: {
    name: "Node.js",
    icon: "https://www.mjawadzaiter.dev/tech-logos/node.svg",
    bgColor: "",
  },
  react: {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    bgColor: "",
  },
  mongodb: {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    bgColor: "",
  },
  typescript: {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    bgColor: "",
  },
  c: {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    bgColor: "",
  },
  java: {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    bgColor: "",
  },
  javascript: {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    bgColor: "",
  },
  express: {
    name: "Express.js",
    icon: "https://www.mjawadzaiter.dev/tech-logos/express.png",
    bgColor: "",
  },
  postgresql: {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    bgColor: "",
  },
  redux: {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    bgColor: "",
  },
  nextjs: {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    bgColor: "",
  },
  firebase: {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    bgColor: "",
  },
  git: {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    bgColor: "",
  },
  dotnet: {
    name: ".NET Core",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    bgColor: "",
  },
  csharp: {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    bgColor: "bg-purple-600",
  },
  sqlserver: {
    name: "SQL Server",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    bgColor: "",
  },
  ffmpeg: {
    name: "FFmpeg",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    bgColor: "",
  },
};

interface TechStackItem {
  key: keyof typeof techIcons;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  techStack: TechStackItem[];
  companyLogo: string;
  logoText?: string;
  logoBgColor?: string;
  logoTextColor?: string;
}

interface WorkExperienceSectionProps {
  experiences: WorkExperience[];
}

const TechStackGrid = ({ techStack }: { techStack: TechStackItem[] }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl text-white mb-6">Tech Stack</h2>
      <div className="grid grid-cols-2 gap-3">
        {techStack.map((tech, index) => {
          const techInfo = techIcons[tech.key];
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-3 bg-white/5 hover:bg-white/10 transition-colors rounded-lg"
            >
              <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                <img
                  src={techInfo.icon}
                  alt={techInfo.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <span className="text-white font-medium text-base whitespace-nowrap">
                {techInfo.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TimelineExperience = ({
  experiences,
}: {
  experiences: WorkExperience[];
}) => {
  return (
    <div className="relative">
      {experiences.map((experience, index) => (
        <div key={experience.id} className="relative mb-12 last:mb-0">
          {/* Company header with logo */}
          <div className="flex items-start mb-6">
            <div className="flex flex-col items-center mr-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <img
                  src={experience.companyLogo}
                  alt={experience.company}
                  className=" object-contain"
                />
              </div>
              {index < experiences.length - 1 && (
                <div className="w-0.5 bg-gray-600 h-20 mt-4"></div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-xl text-white mb-1">
                {experience.company}
              </h3>
              <p className="text-blue-400 font-medium text-sm">
                {experience.position} | {experience.duration}
              </p>
            </div>
          </div>

          {/* Description with vertical timeline */}
          <div className="relative ml-6">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"></div>
            <div className="space-y-6">
              {experience.description.map((desc, descIndex) => (
                <div key={descIndex} className="relative flex items-start">
                  <div className="absolute -left-2 w-4 h-4 bg-white rounded-full"></div>
                  <div className="ml-8">
                    <p className="text-white leading-relaxed text-lg">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function WorkExperienceSection({
  experiences,
}: WorkExperienceSectionProps) {
  // Sample data for demonstration
  const sampleExperiences: WorkExperience[] = experiences || [
    {
      id: "1",
      company: "Alpha Technology Group",
      position: "Full-Stack Developer",
      duration: "Sep 2024 - Now",
      description: [
        "Maintained a 100,000+ line .NET Core codebase, focusing on debugging critical issues and managing interactions with the SQL Server database.",
        "Integrated new features into the .NET Core application, including advanced email and push notification capabilities using Firebase.",
        "Created a sample project that utilizes FFmpeg and Node.js to efficiently process and merge videos.",
      ],
      techStack: [
        { key: "dotnet" },
        { key: "csharp" },
        { key: "ffmpeg" },
        { key: "nodejs" },
        { key: "sqlserver" },
        { key: "firebase" },
        { key: "express" },
        { key: "nextjs" },
        { key: "typescript" },
        { key: "git" },
      ],
      companyLogo: "/api/placeholder/48/48",
    },
    {
      id: "2",
      company: "Freelance",
      position: "Software Engineer",
      duration: "Aug 2023 - Now",
      description: [
        "Developed a full-stack Next.js website with Strapi CMS and PostgreSQL for a mental services Canadian organization.",
        "Built responsive web applications using modern React patterns and TypeScript.",
        "Implemented RESTful APIs and database optimization strategies.",
      ],
      techStack: [
        { key: "nextjs" },
        { key: "react" },
        { key: "typescript" },
        { key: "postgresql" },
        { key: "nodejs" },
        { key: "git" },
      ],
      companyLogo: "/api/placeholder/48/48",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-8 sm:mb-12 lg:mb-16">
          Work Experience
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Timeline */}
          <div className="lg:pr-8">
            <TimelineExperience experiences={sampleExperiences} />
          </div>

          {/* Right side - Tech Stack */}
          <div className="lg:pl-8">
            <div className="lg:sticky lg:top-8">
              <TechStackGrid
                techStack={sampleExperiences[0]?.techStack || []}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
