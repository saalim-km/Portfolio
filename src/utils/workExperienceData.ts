import type { WorkExperience } from "../components/WorkExperience";

export const workExperiences: WorkExperience[] = [
  {
    id: "jethur-innovations",
    company: "Jethur Innovations Pvt. Ltd.",
    position: "Software Engineer",
    duration: "October 2025 – Present",
    logoText: "J",
    logoBgColor: "",
    logoTextColor: "text-white",
    description: [
      "Engineered production-ready backend services for a live enterprise GRC platform using Golang, Gin, MSSQL, and GORM, designing secure REST APIs to drive complex multi-stage approvals and Role-Based Access Control (RBAC).",
      "Architected and delivered the KPI Management module, featuring a complex, data-intensive dashboard for real-time metrics. Built the underlying automated calculation engines, optimized APIs, and threshold evaluations to replace manual tracking with structured digital workflows.",
      "Developed core functionality for Internal Audit & Compliance Management, structuring scalable APIs and relational database schemas to handle audit execution, real-time validations, and automated notifications for regulatory workflows.",
      "Translated ISO-based compliance standards directly into backend software rules, ensuring all business logic strictly adhered to governance, risk, and control mandates.",
      "Collaborated directly with clients and product managers to define technical scope, troubleshoot production issues under tight deadlines, and adapt architecture to shifting business priorities.",
      "Optimized backend performance and data access patterns, improving API efficiency and database operations across data-intensive GRC workflows while maintaining scalability and reliability for production workloads.",
      "Implemented workflow automation and business-critical integrations, including scheduled processes, notifications, validations, and data-driven workflows that reduced manual intervention and improved traceability across GRC operations.",
    ],
    modules: [
      {
        title: "KPI Management & Calculation Engine",
        badge: "Data-Intensive",
        description:
          "Replaced manual spreadsheet tracking with an automated calculation and threshold evaluation engine for enterprise KPIs, serving real-time metrics to executive dashboards.",
        technologies: ["Golang", "Gin", "MSSQL", "GORM"],
      },
      {
        title: "Internal Audit & Compliance Lifecycle",
        badge: "Governance",
        description:
          "Structured scalable APIs and relational database schemas to handle audit scheduling, field execution, real-time validation checks, and automated reporting.",
        technologies: ["Golang", "REST APIs", "MSSQL", "Goose"],
      },
      {
        title: "Multi-Stage Approvals & Enterprise RBAC",
        badge: "Security",
        description:
          "Architected state-machine approval pipelines with strict Role-Based Access Control and cryptographically verified JWT authentication for enterprise tenant hierarchies.",
        technologies: ["Golang", "JWT", "RBAC", "State Machine"],
      },
      {
        title: "ISO Standards Rule Engine & Automation",
        badge: "Automation",
        description:
          "Translated ISO governance standards into backend software rules with scheduled background workers for proactive compliance audits and automated alerts.",
        technologies: ["ISO Standards", "Cron Workers", "GRC Rules"],
      },
    ],
    companyLogo: "jethur_logo.svg",
    techStack: [
      { key: "golang" },
      { key: "gin" },
      { key: "gorm" },
      { key: "mssql" },
      { key: "goose" },
      { key: "grc" },
      { key: "jwt" },
      { key: "git" },
      { key: "githubactions" },
      { key: "postman" },
    ],
  },
];
