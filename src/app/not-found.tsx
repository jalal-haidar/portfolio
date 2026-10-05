import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <p className="font-mono text-sm text-emerald-700 dark:text-emerald-400">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        That page does not exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:text-zinc-950"
      >
        Back home
      </Link>
    </div>
  );
}
