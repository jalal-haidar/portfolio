import Image from "next/image";
import type { Project } from "@/content/projects";

type Props = { project: Project; priority?: boolean; sizes?: string };

function monogram(project: Project): string {
  const words = project.slug.split("-").filter(Boolean);
  const letters =
    words.length > 1
      ? words.map((w) => w[0]).join("")
      : (words[0] ?? project.title).slice(0, 2);
  return letters.slice(0, 2).toUpperCase();
}

export function ProjectCover({
  project,
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: Props) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
      {project.cover ? (
        <Image
          src={project.cover}
          alt={`${project.title} screenshot`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      ) : (
        <div
          role="img"
          aria-label={`${project.title} — ${project.stack.slice(0, 3).join(", ")}`}
          className="relative flex h-full w-full flex-col justify-end bg-gradient-to-br from-zinc-100 via-white to-emerald-50 p-5 dark:from-zinc-900 dark:via-zinc-950 dark:to-emerald-950/40"
        >
          <span
            aria-hidden
            className="absolute top-1 right-4 font-mono text-[7rem] leading-none font-bold text-emerald-600/15 select-none dark:text-emerald-400/15"
          >
            {monogram(project)}
          </span>
          <span className="font-mono text-xs tracking-widest text-emerald-700 uppercase dark:text-emerald-400">
            {project.source === "public" ? "open source" : "product"}
          </span>
          <p className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            {project.stack.slice(0, 4).join(" · ")}
          </p>
        </div>
      )}
    </div>
  );
}
