import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { CopyEmail } from "@/components/CopyEmail";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { TechChips } from "@/components/TechChips";
import { profile } from "@/content/profile";
import { writing } from "@/content/writing";
import { getFeaturedProjects } from "@/lib/site";

const primaryBtn =
  "inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400";
const secondaryBtn =
  "inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:outline-none dark:border-zinc-700 dark:hover:bg-zinc-900 dark:focus-visible:ring-emerald-400";
const textLink =
  "rounded font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-800 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:outline-none dark:text-emerald-400 dark:hover:text-emerald-300";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      <section className="py-16 sm:py-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-950/40 dark:text-emerald-300">
          <span
            className="size-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"
            aria-hidden
          />
          {profile.status}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-xl leading-8 text-zinc-800 sm:text-2xl sm:leading-9 dark:text-zinc-200">
          {profile.tagline}
        </p>
        <p className="mt-3 font-mono text-sm text-zinc-500">{profile.stackLine}</p>
        <p className="mt-6 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
          {profile.bio}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className={primaryBtn}>
            View work
          </a>
          <Link href="/resume" className={secondaryBtn}>
            Resume
          </Link>
          <a href={`mailto:${profile.email}`} className={secondaryBtn}>
            <Mail className="size-4" aria-hidden />
            Email me
          </a>
        </div>
      </section>

      <Section
        id="work"
        title="Selected work"
        action={
          <Link href="/projects" className={`${textLink} text-sm`}>
            All projects →
          </Link>
        }
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i < 2} />
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <ExperienceTimeline />
      </Section>

      <Section id="skills" title="Skills">
        <dl className="grid gap-6 sm:grid-cols-2">
          {profile.skills.map((g) => (
            <div key={g.group}>
              <dt className="mb-2 text-sm font-semibold text-zinc-500">{g.group}</dt>
              <dd>
                <TechChips items={g.items} />
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {writing.length > 0 && (
        <Section id="writing" title="Writing">
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {writing.map((a) => (
              <li key={a.url}>
                <a
                  href={a.url}
                  className="group flex items-baseline justify-between gap-4 rounded py-3 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:outline-none dark:focus-visible:ring-emerald-400"
                >
                  <span className="font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                    {a.title}
                    <ArrowUpRight
                      className="ml-1 inline size-4 align-text-top"
                      aria-hidden
                    />
                  </span>
                  <span className="shrink-0 font-mono text-xs text-zinc-500">
                    {a.date}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section id="contact" title="Get in touch">
        <p className="max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
          I am looking for a remote full-stack role with a product team in the EU or the
          US. The quickest way to reach me is email.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className={primaryBtn}>
            <Mail className="size-4" aria-hidden />
            {profile.email}
          </a>
          <CopyEmail email={profile.email} />
          <a href={profile.links.linkedin} className={secondaryBtn}>
            LinkedIn
          </a>
          <a href={profile.links.github} className={secondaryBtn}>
            GitHub
          </a>
        </div>
      </Section>
    </>
  );
}
