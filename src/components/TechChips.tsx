type Props = { items: readonly string[]; max?: number };

export function TechChips({ items, max }: Props) {
  const shown = max ? items.slice(0, max) : items;
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {shown.map((item) => (
        <li
          key={item}
          className="rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
