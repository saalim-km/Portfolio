
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

  javascript: {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
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

  mssql: {
    name: "MSSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    bgColor: "",
  },

  golang: {
    name: "Go",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    bgColor: "",
  },

  gin: {
    name: "Gin",
    icon: "https://raw.githubusercontent.com/gin-gonic/logo/master/color.png",
    bgColor: "",
  },

  gorm: {
    name: "GORM",
    icon: "/gorm.png",
    bgColor: "",
  },

  goose: {
    name: "Goose",
    icon: "/goose_logo.png",
    bgColor: "",
  },

  grc: {
    name: "GRC",
    icon: "/grc_icon.svg",
    bgColor: "",
  },

  docker: {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    bgColor: "",
  },

  aws: {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    bgColor: "",
  },

  redis: {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    bgColor: "",
  },

  nginx: {
    name: "Nginx",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
    bgColor: "",
  },

  githubactions: {
    name: "GitHub Actions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
    bgColor: "",
  },

  jwt: {
    name: "JWT",
    icon: "/jwt_logo.svg",
    bgColor: "",
  },

  postman: {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    bgColor: "",
  },

  socketio: {
    name: "Socket.IO",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
    bgColor: "bg-black",
  },

  ffmpeg: {
    name: "FFmpeg",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ffmpeg/ffmpeg-original.svg",
    bgColor: "",
  },
};

interface TechStackItem {
  key: keyof typeof techIcons;
}

export interface EnterpriseModule {
  title: string;
  badge: string;
  description: string;
  technologies: string[];
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  modules?: EnterpriseModule[];
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
      {/* Mobile/Tablet: Horizontal wrap layout */}
      <div className="lg:hidden flex flex-wrap gap-3">
        {techStack.map((tech, index) => {
          const techInfo = techIcons[tech.key];
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 transition-colors rounded-lg"
            >
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <img
                  src={techInfo.icon}
                  alt={techInfo.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-medium text-sm whitespace-nowrap">
                {techInfo.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden lg:grid grid-cols-2 gap-3">
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
                  className="w-full h-full object-contain"
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
    <div className="flex flex-col">
      <div className="relative">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative mb-12 last:mb-0">
            {/* Company header with logo */}
            <div className="flex items-start mb-6">
              <div className="flex flex-col items-center mr-6">
                <div
                  className={`w-12 h-12 flex items-center justify-center flex-shrink-0 ${
                    experience.companyLogo
                      ? "bg-transparent"
                      : `${experience.logoBgColor || "bg-white/10"} rounded-full overflow-hidden`
                  }`}
                >
                  {experience.companyLogo ? (
                    <img
                      src={experience.companyLogo}
                      alt={experience.company}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span
                      className={`text-lg font-bold ${
                        experience.logoTextColor || "text-white"
                      }`}
                    >
                      {experience.logoText || experience.company.charAt(0)}
                    </span>
                  )}
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-0.5 bg-gray-600 h-20 mt-4"></div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl text-white mb-1 font-medium">
                  {experience.company}
                </h3>
                <p className="text-blue-500 text-sm">
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
                      <p className="text-white leading-relaxed text-md">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Core Enterprise Modules (Apple Minimalist Design) */}
                {experience.modules && experience.modules.length > 0 && (
                  <div className="relative flex items-start pt-2">
                    <div className="absolute -left-2 w-4 h-4 bg-white rounded-full"></div>
                    <div className="ml-8 w-full">
                      <div className="mb-4">
                        <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
                          Core Enterprise Modules Engineered
                        </span>
                        <p className="text-xs text-zinc-500 mt-0.5">
                          Architected for enterprise-scale B2B compliance &amp; risk governance
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {experience.modules.map((mod, modIdx) => (
                          <div
                            key={modIdx}
                            className="group relative rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 p-4 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                                  {mod.title}
                                </h4>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 whitespace-nowrap">
                                  {mod.badge}
                                </span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed">
                                {mod.description}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                              {mod.technologies.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
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
