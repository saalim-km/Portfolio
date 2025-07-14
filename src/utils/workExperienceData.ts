import type { WorkExperience } from "../components/WorkExperience";

export const workExperiences: WorkExperience[] = [
  {
    id: "packapeer-academy",
    company: "Brototype (Packapeer Academy Private Limited)",
    position: "Full-Stack Web Development Bootcamp",
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
      "brototype_logo.jpeg",
    techStack: [
      { key: "nodejs" },
      { key: "react" },
      { key: "mongodb" },
      { key: "typescript" },
      { key: "javascript" },
      { key: "express" },
      { key: "redux" },
      { key: "firebase" },
      { key: "git" },
      {key : 'c'},
      {key : 'java'},
      {key : 'postgresql'}
    ],
  },
];