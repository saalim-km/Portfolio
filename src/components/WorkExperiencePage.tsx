import WorkExperienceSection, { type WorkExperience } from "./WorkExperience";

const workExperiences: WorkExperience[] = [
  {
    id: "packapeer-academy",
    company: "Packapeer Academy",
    position: "Professional Development Program",
    duration: "June 2024 – Present",
    logoText: "P",
    logoBgColor: "bg-orange-500",
    logoTextColor: "text-white",
    description: [
      "Engaged in a comprehensive self-learning program featuring hands-on projects, personalized mentorship from industry experts, weekly performance reviews, and real-world applications, fostering innovative problem-solving, technical proficiency, and a commitment to continuous improvement.",
      "Mentoring students in building strong technical foundations by conducting thorough code reviews, providing constructive feedback, and guiding best practices in software development.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions and implemented best practices in modern web development.",
    ],
    companyLogo:
      "https://media.licdn.com/dms/image/v2/C4D0BAQEWqmtyVtZl7Q/company-logo_100_100/company-logo_100_100/0/1653839709668/brototype_logo?e=1755129600&v=beta&t=8_WL1r1NfEyLKzLj2C0fX9_30KoIScO-P9yyX7-7jEU",
    techStack: [
      { key: "nodejs" },
      { key: "react" },
      { key: "mongodb" },
      { key: "typescript" },
      { key: "c" },
      { key: "java" },
      { key: "javascript" },
      { key: "express" },
      { key: "postgresql" },
      { key: "redux" },
      { key: "nextjs" },
      { key: "firebase" },
      { key: "git" },
    ],
  },
];

function WorkExperiencePage() {
  return <WorkExperienceSection experiences={workExperiences} />;
}

export default WorkExperiencePage;
