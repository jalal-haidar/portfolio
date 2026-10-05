export const profile = {
  name: "Jalal Haidar",
  role: "Full Stack Software Engineer",
  tagline: "Full-stack TypeScript engineer who ships AI-powered products end to end.",
  stackLine: "Next.js · Node.js/NestJS · Postgres/Supabase · LLM integrations",
  location: "Islamabad, Pakistan (UTC+5)",
  status: "Open to remote roles",
  email: "jalal99.dev@gmail.com",
  bio: "Nearly 5 years building Node.js, Next.js and Postgres systems — from multi-tenant enterprise backends at Genesis Engineering to my own multi-app platform with AI vision, a cross-app auth SDK, browser and VS Code extensions, and a Rust desktop app. Based in Islamabad (UTC+5), open to remote roles with EU and US teams.",
  links: {
    github: "https://github.com/jalal-haidar",
    linkedin: "https://www.linkedin.com/in/jalalhaidar/",
    medium: "https://medium.com/@jalal-haidar",
  },
  skills: [
    {
      group: "Languages & frameworks",
      items: [
        "TypeScript",
        "JavaScript",
        "Node.js",
        "NestJS",
        "Next.js",
        "React",
        "React Native / Expo",
        "Vue / Nuxt",
        "Rust (Tauri)",
        "C#",
      ],
    },
    {
      group: "Data",
      items: ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "Prisma", "GraphQL"],
    },
    {
      group: "AI",
      items: ["Gemini / LLM APIs", "AI coding agents", "In-browser ML (ONNX, MediaPipe)"],
    },
    {
      group: "Delivery",
      items: [
        "Vercel",
        "Azure DevOps",
        "GitHub Actions",
        "Docker",
        "Playwright",
        "Vitest",
        "Sentry",
      ],
    },
  ],
  education: {
    degree: "BS in Software Engineering",
    school: "International Islamic University, Islamabad (IIUI)",
    gpa: "3.0 / 4.0",
  },
  certificates: ["Docker — Certificate of Completion"],
} as const;
