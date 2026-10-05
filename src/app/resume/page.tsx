import type { Metadata } from "next";
import { PrintButton } from "@/components/PrintButton";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { getFeaturedProjects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `${profile.name} — ${profile.role}. Experience, skills and selected products.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  const featured = getFeaturedProjects();
  return (
    <div className="mx-auto max-w-3xl py-12 sm:py-16 print:py-0">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">{profile.role}</p>
        </div>
        <PrintButton />
      </div>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
        {profile.location} · {profile.email} · github.com/jalal-haidar ·
        linkedin.com/in/jalalhaidar
      </p>
      <p className="mt-4 leading-7">
        {profile.tagline} {profile.stackLine}.
      </p>

      <h2 className="mt-8 border-b border-zinc-300 pb-1 text-sm font-semibold tracking-widest text-zinc-500 uppercase dark:border-zinc-700 dark:text-zinc-400">
        Experience
      </h2>
      <div className="mt-4 space-y-6">
        {experience.map((job) => (
          <div key={job.company} className="break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">
                {job.company}, <span className="font-normal italic">{job.role}</span>
              </h3>
              <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {job.period} | {job.location}
              </p>
            </div>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mt-8 border-b border-zinc-300 pb-1 text-sm font-semibold tracking-widest text-zinc-500 uppercase dark:border-zinc-700 dark:text-zinc-400">
        Selected products
      </h2>
      <ul className="mt-4 space-y-3 text-sm leading-6">
        {featured.map((p) => (
          <li key={p.slug}>
            <span className="font-semibold">{p.title}</span> — {p.tagline}
          </li>
        ))}
      </ul>

      <h2 className="mt-8 border-b border-zinc-300 pb-1 text-sm font-semibold tracking-widest text-zinc-500 uppercase dark:border-zinc-700 dark:text-zinc-400">
        Skills
      </h2>
      <dl className="mt-4 space-y-2 text-sm leading-6">
        {profile.skills.map((g) => (
          <div key={g.group}>
            <dt className="inline font-semibold">{g.group}: </dt>
            <dd className="inline">{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-8 border-b border-zinc-300 pb-1 text-sm font-semibold tracking-widest text-zinc-500 uppercase dark:border-zinc-700 dark:text-zinc-400">
        Education &amp; certificates
      </h2>
      <p className="mt-4 text-sm leading-6">
        <span className="font-semibold">{profile.education.degree}</span>,{" "}
        {profile.education.school} — {profile.education.gpa}
      </p>
      <p className="mt-1 text-sm leading-6">{profile.certificates.join(" · ")}</p>
    </div>
  );
}
