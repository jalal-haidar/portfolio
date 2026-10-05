import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectCover } from "@/components/ProjectCover";
import { TechChips } from "@/components/TechChips";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="group relative flex flex-col gap-4 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-emerald-600/50 dark:border-zinc-800 dark:hover:border-emerald-400/50">
      <ProjectCover project={project} priority={priority} />
      <div className="flex flex-1 flex-col gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            <Link
              href={`/projects/${project.slug}`}
              className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-emerald-600 dark:focus-visible:after:ring-emerald-400"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {project.tagline}
          </p>
        </div>
        <div className="mt-auto flex flex-col gap-3">
          <TechChips items={project.stack} max={4} />
          <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
            {project.period} ·{" "}
            {project.source === "public" ? "Open source" : "Source on request"}
          </p>
        </div>
      </div>
    </article>
  );
}
