/** Resume-only copy. Everything else (experience, skills, education) comes from the shared content files. */
export const resume = {
  headline: "Full-Stack Software Engineer · TypeScript, Next.js, Node.js, AI products",
  summary:
    "Full-stack TypeScript engineer with nearly 5 years building Node.js, Next.js and Postgres systems, from multi-tenant enterprise backends to AI-powered products I designed and shipped myself. I own features end to end: data model, API, UI, tests, CI/CD and production monitoring.",
  products: [
    {
      slug: "lifelens",
      line: "Next.js 16 hub, Expo mobile app and five lens apps on Supabase. 372 commits, 110 SQL migrations with row-level security, Vitest and Playwright tests, decisions recorded as ADRs.",
    },
    {
      slug: "wardrobe-lens",
      line: "Gemini Vision catalogs a garment from one photo; background removal runs in the browser (ONNX, MediaPipe). Circuit breakers and a graceful fallback when AI is unavailable.",
    },
    {
      slug: "lifelens-auth",
      line: "TypeScript SDK published on npm that gives separate Next.js apps one login through a PKCE bridge. 10 entry points, 15 test files.",
    },
    {
      slug: "opencode-chat",
      line: "Copilot-style AI coding chat for VS Code: streaming responses, tool-permission prompts, model selection and a typed host–webview protocol.",
    },
    {
      slug: "gitswitch",
      line: "Tauri 2 / Rust desktop app for managing Git identities per folder. 121 Rust tests, CI, signed Windows installers with auto-update.",
    },
  ],
} as const;
