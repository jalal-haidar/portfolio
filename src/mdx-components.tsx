import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-10 mb-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
      {...props}
    />
  ),
  h3: (props) => <h3 className="mt-6 mb-2 text-lg font-semibold" {...props} />,
  p: (props) => (
    <p className="my-4 leading-7 text-zinc-700 dark:text-zinc-300" {...props} />
  ),
  ul: (props) => (
    <ul
      className="my-4 list-disc space-y-2 pl-6 text-zinc-700 marker:text-emerald-600 dark:text-zinc-300 dark:marker:text-emerald-400"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-4 list-decimal space-y-2 pl-6 text-zinc-700 dark:text-zinc-300"
      {...props}
    />
  ),
  li: (props) => <li className="leading-7" {...props} />,
  strong: (props) => (
    <strong className="font-semibold text-zinc-900 dark:text-zinc-50" {...props} />
  ),
  a: (props) => (
    <a
      className="font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.85em] dark:bg-zinc-800"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-4 overflow-x-auto rounded-lg bg-zinc-100 p-4 font-mono text-sm dark:bg-zinc-900"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-4 border-l-4 border-emerald-600 pl-4 text-zinc-600 italic dark:border-emerald-400 dark:text-zinc-400"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
