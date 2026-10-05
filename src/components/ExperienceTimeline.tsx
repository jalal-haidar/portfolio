import { experience } from "@/content/experience";

export function ExperienceTimeline() {
  return (
    <ol className="relative space-y-8 border-l border-zinc-200 pl-6 dark:border-zinc-800">
      {experience.map((job) => (
        <li key={job.company} className="relative">
          <span
            aria-hidden
            className="absolute top-2 -left-[29px] size-2.5 rounded-full bg-emerald-600 ring-4 ring-white dark:bg-emerald-400 dark:ring-zinc-950"
          />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-semibold">
              {job.role}{" "}
              <span className="text-zinc-500 dark:text-zinc-400">· {job.company}</span>
            </h3>
            <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              {job.period} · {job.location}
            </p>
          </div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700 marker:text-zinc-400 dark:text-zinc-300">
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
