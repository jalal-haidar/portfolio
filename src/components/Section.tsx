import type { ReactNode } from "react";

type Props = {
  id?: string;
  title: string;
  children: ReactNode;
  action?: ReactNode;
};

export function Section({ id, title, children, action }: Props) {
  return (
    <section id={id} className="scroll-mt-20 py-10 sm:py-14">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}
