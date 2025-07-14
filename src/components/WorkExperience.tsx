// Tech stack with high-quality icons matching the reference image
const techIcons = {
  nodejs: {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    bgColor: "bg-green-600",
  },
  react: {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    bgColor: "bg-blue-500",
  },
  mongodb: {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    bgColor: "bg-green-500",
  },
  typescript: {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    bgColor: "bg-blue-600",
  },
  c: {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    bgColor: "bg-blue-700",
  },
  java: {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    bgColor: "bg-red-600",
  },
  javascript: {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    bgColor: "bg-yellow-500",
  },
  express: {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    bgColor: "bg-gray-600",
  },
  postgresql: {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    bgColor: "bg-blue-800",
  },
  redux: {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    bgColor: "bg-purple-600",
  },
  nextjs: {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    bgColor: "bg-black",
  },
  firebase: {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    bgColor: "bg-orange-500",
  },
  git: {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    bgColor: "bg-red-500",
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
  companyLogo?: string;
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
      <h2 className="text-2xl text-white mb-8">Tech Stack</h2>
      <div className="grid grid-cols-2 gap-4">
        {techStack.map((tech, index) => {
          const techInfo = techIcons[tech.key];
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border"
            >
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img
                  src={techInfo.icon || "/placeholder.svg"}
                  alt={techInfo.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-white font-medium text-lg">
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
        <div key={experience.id} className="relative mb-16">
          {/* Company header with logo */}
          <div className="flex items-start mb-8">
            <div className="flex flex-col items-center mr-8">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  experience.logoBgColor || "bg-orange-500"
                } text-white font-bold text-lg`}
              >
                {experience.logoText || experience.company.charAt(0)}
              </div>
              {index < experiences.length - 1 && (
                <div className="w-0.5 bg-white h-16 mt-4"></div>
              )}
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white">
                {experience.company}
              </h3>
              <p className="text-blue-500 font-medium ">
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
  return (
    <div className="min-h-screen bg-black py-16 px-8 flex items-center justify-center">
      <div className="max-w-7xl">
        <h1 className="text-6xl text-white text-left mb-20">Work Experience</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side - Timeline */}
          <div className="lg:col-span-2">
            <TimelineExperience experiences={experiences} />
          </div>

          {/* Right side - Tech Stack */}
          <div className="lg:col-span-1 ">
            <TechStackGrid techStack={experiences[0]?.techStack || []} />
          </div>
        </div>
      </div>
    </div>
  );
}
