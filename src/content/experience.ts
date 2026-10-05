export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "Genesis Engineering",
    role: "Full Stack Software Engineer",
    period: "Jan 2024 – Present",
    location: "Islamabad",
    bullets: [
      "Build scalable multi-tenant Node.js backends with strict data isolation between tenants and efficient shared resources.",
      "Improved REST and GraphQL APIs through query optimization, caching and simpler database access — a 25% boost in system performance.",
      "Lead delivery in an Agile/Scrum team and own CI/CD pipelines on Azure DevOps, working with cross-functional teams to ship full-stack features.",
    ],
  },
  {
    company: "TechChaps Technologies",
    role: "MERN Stack Developer",
    period: "Dec 2022 – Dec 2023",
    location: "Islamabad",
    bullets: [
      "Built and maintained Node.js REST APIs powering scalable web apps, and designed MongoDB, MySQL and PostgreSQL schemas with Mongoose, Sequelize and pg-promise.",
      "Added webhook integrations, caching and unit tests that reduced latency and improved reliability and code quality.",
    ],
  },
  {
    company: "Softosol Pvt. Ltd.",
    role: "Junior Software Developer",
    period: "Dec 2021 – Dec 2022",
    location: "Islamabad",
    bullets: [
      "Built reusable React components that sped up internal app development and kept the UI consistent and easy to maintain.",
      "Developed Node.js REST APIs with proper error handling and documented them with Swagger and Postman.",
    ],
  },
];
