import { ArrowUpRight, Lock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCover } from "@/components/ProjectCover";
import { TechChips } from "@/components/TechChips";
import { getAllProjects, getNextProject, getProject } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.tagline },
  };
}

const linkBtn =
  "inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:outline-none dark:border-zinc-700 dark:hover:bg-zinc-900 dark:focus-visible:ring-emerald-400";

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { default: Body } = await import(`@/content/projects/${slug}.mdx`);
  const next = getNextProject(slug);
  const { links } = project;

  return (
    <article className="mx-auto max-w-3xl py-12 sm:py-16">
      <Link
        href="/projects"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← All projects
      </Link>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">{project.title}</h1>
      <p className="mt-3 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {project.tagline}
      </p>

      <dl className="mt-6 grid gap-4 border-y border-zinc-200 py-4 text-sm sm:grid-cols-3 dark:border-zinc-800">
        <div>
          <dt className="text-zinc-500">Role</dt>
          <dd className="mt-0.5 font-medium">{project.role}</dd>
        </div>
        <div>
          <dt className="text-zinc-500">Period</dt>
          <dd className="mt-0.5 font-medium">{project.period}</dd>
        </div>
        <div>
          <dt className="text-zinc-500">Source</dt>
          <dd className="mt-0.5 font-medium">
            {project.source === "public" ? (
              "Open source"
            ) : (
              <span className="inline-flex items-center gap-1.5">
                <Lock className="size-3.5" aria-hidden /> Private — available on request
              </span>
            )}
          </dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap gap-3">
        {links.live && (
          <a href={links.live} className={linkBtn}>
            Live site <ArrowUpRight className="size-4" aria-hidden />
          </a>
        )}
        {links.repo && (
          <a href={links.repo} className={linkBtn}>
            Source on GitHub <ArrowUpRight className="size-4" aria-hidden />
          </a>
        )}
        {links.releases && (
          <a href={links.releases} className={linkBtn}>
            Releases <ArrowUpRight className="size-4" aria-hidden />
          </a>
        )}
        {links.npm && (
          <a href={links.npm} className={linkBtn}>
            npm package <ArrowUpRight className="size-4" aria-hidden />
          </a>
        )}
      </div>

      <div className="mt-8">
        <ProjectCover
          project={project}
          priority
          sizes="(min-width: 768px) 768px, 100vw"
        />
      </div>

      <section aria-label="Highlights" className="mt-8">
        <h2 className="sr-only">Highlights</h2>
        <ul className="space-y-2 rounded-xl bg-zinc-50 p-5 text-sm leading-6 dark:bg-zinc-900/60">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span
                className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400"
                aria-hidden
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-6">
        <Body />
      </div>

      <section aria-label="Stack" className="mt-10">
        <h2 className="mb-3 text-xl font-semibold tracking-tight">Stack</h2>
        <TechChips items={project.stack} />
      </section>

      {next && (
        <nav
          aria-label="Next project"
          className="mt-14 border-t border-zinc-200 pt-6 dark:border-zinc-800"
        >
          <p className="text-sm text-zinc-500">Next project</p>
          <Link
            href={`/projects/${next.slug}`}
            className="mt-1 inline-block text-lg font-semibold hover:text-emerald-700 dark:hover:text-emerald-400"
          >
            {next.title} →
          </Link>
        </nav>
      )}
    </article>
  );
}
