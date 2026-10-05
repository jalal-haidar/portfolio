"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:outline-none dark:border-zinc-700 dark:hover:bg-zinc-900 dark:focus-visible:ring-emerald-400"
    >
      <Printer className="size-4" aria-hidden />
      Print / Save as PDF
    </button>
  );
}
