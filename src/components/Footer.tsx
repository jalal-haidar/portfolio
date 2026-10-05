import { profile } from "@/content/profile";

const link =
  "rounded text-zinc-600 underline-offset-4 hover:text-emerald-700 hover:underline focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:outline-none dark:text-zinc-400 dark:hover:text-emerald-400 dark:focus-visible:ring-emerald-400";

export function Footer() {
  return (
    <footer className="no-print mt-16 border-t border-zinc-200 py-8 text-sm dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js ·{" "}
          <a
            className={`${link} underline`}
            href="https://github.com/jalal-haidar/portfolio"
          >
            source
          </a>
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <a className={link} href={profile.links.github}>
              GitHub
            </a>
          </li>
          <li>
            <a className={link} href={profile.links.linkedin}>
              LinkedIn
            </a>
          </li>
          <li>
            <a className={link} href={profile.links.medium}>
              Medium
            </a>
          </li>
          <li>
            <a className={link} href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
