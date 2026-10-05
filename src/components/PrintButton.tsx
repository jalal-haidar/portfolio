"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-800 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400"
    >
      <Printer className="size-4" aria-hidden />
      Print / Save as PDF
    </button>
  );
}
