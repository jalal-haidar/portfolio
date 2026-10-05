import { Download } from "lucide-react";
import type { Metadata } from "next";
import { PrintButton } from "@/components/PrintButton";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { resume } from "@/content/resume";
import { SITE_URL, getProject } from "@/lib/site";

const RESUME_PDF = "/Jalal_Haidar_Resume.pdf";

export const metadata: Metadata = {
  title: "Resume",
  description: `${profile.name} — ${resume.headline}. Experience, products, skills and education.`,
  alternates: { canonical: "/resume" },
};

const bare = (url: string) =>
  url.replace(/^(https?:\/\/)?(www\.)?/, "").replace(/\/$/, "");

const contacts = [
  { label: profile.email, href: `mailto:${profile.email}` },
  { label: bare(SITE_URL), href: SITE_URL },
  { label: bare(profile.links.linkedin), href: profile.links.linkedin },
  { label: bare(profile.links.github), href: profile.links.github },
];

const h2 =
  "mt-7 border-b border-zinc-300 pb-1 text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:border-zinc-700 dark:text-zinc-400 print:mt-3 print:text-[8pt]";
const body = "text-sm leading-6 print:text-[9pt] print:leading-[1.35]";

export default function ResumePage() {
  return (
    <div className="resume mx-auto max-w-3xl py-12 sm:py-16 print:max-w-none print:py-0">
      <div className="no-print mb-8 flex flex-wrap gap-3">
        <a
          href={RESUME_PDF}
          download
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-800 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400"
        >
          <Download className="size-4" aria-hidden />
          Download PDF
        </a>
        <PrintButton />
      </div>

      <header>
        <h1 className="text-3xl font-semibold tracking-tight print:text-[18pt]">
          {profile.name}
        </h1>
        <p className="mt-1 font-medium text-zinc-700 dark:text-zinc-300 print:text-[10.5pt]">
          {resume.headline}
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 print:text-[9pt]">
          {contacts.map((c, i) => (
            <span key={c.href}>
              {i > 0 && " · "}
              <a
                href={c.href}
                className="hover:text-emerald-700 dark:hover:text-emerald-400"
              >
                {c.label}
              </a>
            </span>
          ))}
          <br />
          {profile.location} · Open to remote work
        </p>
      </header>

      <h2 className={h2}>Summary</h2>
      <p className={`mt-2 ${body}`}>{resume.summary}</p>

      <h2 className={h2}>Experience</h2>
      <div className="mt-3 space-y-5 print:mt-2 print:space-y-2.5">
        {experience.map((job) => (
          <section key={job.company} className="break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold print:text-[10pt]">
                {job.role} <span className="font-normal">· {job.company}</span>
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 print:text-[8.5pt]">
                {job.period} · {job.location}
              </p>
            </div>
            <ul
              className={`mt-1.5 list-disc space-y-1 pl-5 print:mt-1 print:space-y-0.5 ${body}`}
            >
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <h2 className={h2}>Selected products</h2>
      <ul className={`mt-3 space-y-2 print:mt-2 print:space-y-1 ${body}`}>
        {resume.products.map(({ slug, line }) => {
          const project = getProject(slug);
          if (!project) return null;
          return (
            <li key={slug}>
              <a
                href={`${SITE_URL}/projects/${slug}`}
                className="font-semibold hover:text-emerald-700 dark:hover:text-emerald-400"
              >
                {project.title}
              </a>{" "}
              — {line}
            </li>
          );
        })}
      </ul>

      <h2 className={h2}>Skills</h2>
      <dl className={`mt-3 space-y-1 print:mt-2 print:space-y-0.5 ${body}`}>
        {profile.skills.map((g) => (
          <div key={g.group}>
            <dt className="inline font-semibold">{g.group}: </dt>
            <dd className="inline">{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>

      <h2 className={h2}>Education &amp; certificates</h2>
      <p className={`mt-3 print:mt-2 ${body}`}>
        <span className="font-semibold">{profile.education.degree}</span>,{" "}
        {profile.education.school} — GPA {profile.education.gpa}
        <br />
        {profile.certificates.join(" · ")}
      </p>
    </div>
  );
}
