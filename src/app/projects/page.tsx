import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Nine products and tools built end to end: an AI wardrobe app, a cross-app auth SDK, a VS Code AI chat, a Rust desktop app and more.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const all = getAllProjects();
  return (
    <div className="py-12 sm:py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-3 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
        Products and tools I designed, built and shipped. Private projects show a case
        study; their source is available on request.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {all.map((p, i) => (
          <ProjectCard key={p.slug} project={p} priority={i < 2} />
        ))}
      </div>
    </div>
  );
}
