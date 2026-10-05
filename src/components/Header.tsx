import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/content/profile";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

export function Header() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="rounded text-sm font-semibold tracking-tight focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:outline-none dark:focus-visible:ring-emerald-400"
        >
          {profile.name}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1.5 text-sm text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:outline-none sm:px-3 dark:text-zinc-400 dark:hover:text-zinc-50 dark:focus-visible:ring-emerald-400"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
