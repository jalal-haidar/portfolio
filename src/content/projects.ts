export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  period: string;
  stack: string[];
  highlights: string[];
  links: { live?: string; repo?: string; releases?: string; npm?: string };
  source: "public" | "private";
  featured: boolean;
  order: number;
  /** Path under /public. When omitted a generated placeholder tile is shown. */
  cover?: string;
};

export const projects: Project[] = [
  {
    slug: "lifelens",
    title: "LifeLens",
    tagline:
      "A free, AI-assisted life-management platform: hub, mobile app and five lens apps.",
    role: "Solo — design, build, ship",
    period: "Nov 2025 – Jul 2026",
    stack: [
      "Next.js 16",
      "React 19",
      "Supabase",
      "Expo",
      "Gemini",
      "Sentry",
      "Playwright",
      "Vitest",
    ],
    highlights: [
      "372 commits across a pnpm monorepo with a Next.js hub, an Expo/React Native mobile app and shared API packages.",
      "110 SQL migrations on Supabase Postgres with row-level security, plus 3 architecture decision records.",
      "28 Vitest test files and Playwright end-to-end specs; circuit breakers and graceful degradation per external service.",
    ],
    links: { live: "https://lifelens-web.vercel.app" },
    source: "private",
    featured: true,
    order: 1,
    cover: "/projects/lifelens/cover.webp",
  },
  {
    slug: "wardrobe-lens",
    title: "Wardrobe Lens",
    tagline:
      "AI wardrobe app: snap a photo, Gemini Vision catalogs it, ML removes the background in-browser.",
    role: "Solo — design, build, ship",
    period: "Jul 2026 – Present",
    stack: [
      "Next.js 16",
      "React 19",
      "Supabase",
      "Gemini Vision",
      "ONNX / MediaPipe",
      "Cloudinary",
      "Web Push",
    ],
    highlights: [
      "Gemini Vision extracts category, colors, fabric, style and brand from a single photo.",
      "Background removal runs client-side with ONNX Runtime Web and MediaPipe.",
      "63 API route handlers, 107 components and 34 hooks on a dedicated Postgres schema.",
    ],
    links: { live: "https://wardrobe-lens.vercel.app" },
    source: "private",
    featured: true,
    order: 2,
  },
  {
    slug: "opencode-chat",
    title: "OpenCode Chat",
    tagline:
      "A Copilot-style AI coding chat for VS Code with streaming, tool approvals and model selection.",
    role: "Solo — design, build, ship",
    period: "Mar 2026",
    stack: ["TypeScript", "VS Code API", "React 18", "Zustand", "Vite", "Bun"],
    highlights: [
      "Streams model output and reasoning in real time, with a virtualized message list.",
      "Tool calls surface a permission prompt: Allow Once, Always Allow or Deny.",
      "Typed message protocol between the extension host and the React webview; auto-restarts the agent server if it crashes.",
    ],
    links: { repo: "https://github.com/jalal-haidar/opencode-chat" },
    source: "public",
    featured: true,
    order: 3,
  },
  {
    slug: "gitswitch",
    title: "GitSwitch",
    tagline:
      "A Tauri desktop app that switches between Git identities, per folder or globally.",
    role: "Solo — design, build, ship",
    period: "Mar – Oct 2026",
    stack: ["Rust", "Tauri 2", "React", "TypeScript", "Zustand", "GitHub Actions"],
    highlights: [
      "Per-folder identity rules via git includeIf, plus SSH key generation and ~/.ssh/config host aliases.",
      "121 Rust tests and 16 frontend test files, with CI and a release workflow.",
      "Ships signed Windows EXE/MSI installers with an auto-update manifest; latest release v0.2.7.",
    ],
    links: {
      repo: "https://github.com/jalal-haidar/gitswitch",
      releases: "https://github.com/jalal-haidar/gitswitch/releases/latest",
    },
    source: "public",
    featured: true,
    order: 4,
  },
  {
    slug: "lifelens-auth",
    title: "@lifelens/auth",
    tagline:
      "An auth SDK that gives separate Next.js apps one login, built on Supabase and PKCE.",
    role: "Solo — design, build, ship",
    period: "Jun – Oct 2026",
    stack: ["TypeScript", "Supabase SSR", "Next.js", "React", "Vitest", "npm"],
    highlights: [
      "Published on npm with 10 entry points: provider, hooks, server/browser clients, middleware guard, PKCE bridge and callback handler.",
      "15 test files covering unit and integration suites.",
      "The hub owns login; a shared cookie and a PKCE code-exchange bridge keep sessions across lens apps.",
    ],
    links: { npm: "https://www.npmjs.com/package/@lifelens/auth" },
    source: "private",
    featured: false,
    order: 5,
  },
  {
    slug: "exchange-lens",
    title: "Exchange Lens",
    tagline:
      "Back-office dashboard for a currency-exchange business: customers, rates, transactions, reports.",
    role: "Solo — design, build, ship",
    period: "Jul 2026",
    stack: ["Next.js 16", "React 19", "Supabase", "Recharts", "Playwright"],
    highlights: [
      "10 dashboard pages and 16 API routes covering customers, transactions, rates, expenses, reports and settings.",
      "10 Playwright end-to-end spec files covering auth, API routes and every main screen.",
      "Responsive for mobile counters, with a dark mode.",
    ],
    links: {
      live: "https://exchange-lens.vercel.app",
      repo: "https://github.com/jalal-haidar/exchange-lens",
    },
    source: "public",
    featured: false,
    order: 6,
    cover: "/projects/exchange-lens/cover.webp",
  },
  {
    slug: "momintrust-web",
    title: "MominTrust Web",
    tagline:
      "Installable website for a non-profit that funds schooling for talented, disadvantaged children.",
    role: "Developer — built for a non-profit",
    period: "Oct 2025",
    stack: [
      "React 18",
      "Vite",
      "TypeScript",
      "MUI",
      "Docker",
      "GitHub Actions",
      "Playwright",
    ],
    highlights: [
      "82 commits in about a week, taking a PWA template to a deployed, branded site.",
      "4 GitHub Actions workflows: CI checks, SonarQube analysis, Docker build and image publishing.",
      "9 Vitest test files and 3 Playwright end-to-end specs, with Husky pre-commit hooks.",
    ],
    links: { live: "https://momin-trust-web.vercel.app" },
    source: "private",
    featured: false,
    order: 7,
    cover: "/projects/momintrust-web/cover.webp",
  },
  {
    slug: "browsing-lens",
    title: "Browsing Lens",
    tagline:
      "Browsing analytics with a Chrome MV3 extension, productivity scores and a focus mode.",
    role: "Solo — design, build, ship",
    period: "Jul 2026",
    stack: ["Next.js 16", "Chrome MV3", "Supabase", "Recharts"],
    highlights: [
      "A Manifest V3 extension records visits locally and syncs them to the web app.",
      "Focus mode blocks distracting sites from configurable rules; dashboards score daily and weekly focus.",
      "A documented ingestion endpoint (/api/ext) backed by a dedicated Postgres schema.",
    ],
    links: { live: "https://browsing-lens.vercel.app" },
    source: "private",
    featured: false,
    order: 8,
  },
  {
    slug: "netparity",
    title: "NetParity",
    tagline:
      "A tiny Windows HUD showing CPU, RAM and network speed that matches Task Manager.",
    role: "Solo — design, build, ship",
    period: "Mar 2026",
    stack: ["PowerShell", ".NET"],
    highlights: [
      "Always-on-top floating window; network shown in bits with automatic Kbps/Mbps scaling.",
      "Built to match the timing and smoothing of the Task Manager Performance tab.",
      "Published as a standalone NetParity.exe on GitHub Releases (v1.0.0).",
    ],
    links: {
      repo: "https://github.com/jalal-haidar/NetParity",
      releases: "https://github.com/jalal-haidar/NetParity/releases/latest",
    },
    source: "public",
    featured: false,
    order: 9,
  },
];
