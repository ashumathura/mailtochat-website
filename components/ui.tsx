import type { ReactNode } from "react";

export function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[7px] border border-b-2 border-slate-300 bg-white px-2 font-mono text-[13px] font-semibold leading-none text-slate-900">
      {children}
    </kbd>
  );
}

export function Container({
  children,
  className = "",
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div className={`mx-auto px-6 ${narrow ? "max-w-215" : "max-w-290"} ${className}`}>
      {children}
    </div>
  );
}

export function Pill({ children, tone = "sun" }: { children: ReactNode; tone?: "sun" | "green" }) {
  const tones = {
    sun: "bg-sun text-sun-ink",
    green: "bg-[#4ADE80] text-[#052E16]",
  };
  return (
    <p className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-bold ${tones[tone]}`}>
      {children}
    </p>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border-l-4 border-sun bg-sun-50 px-4.5 py-3.5">
      <p className="text-base leading-relaxed text-sun-ink">{children}</p>
    </div>
  );
}

export function SectionHead({
  title,
  children,
  max = "max-w-180",
}: {
  title: string;
  children?: ReactNode;
  max?: string;
}) {
  return (
    <div className={`flex flex-col gap-3.5 ${max}`}>
      <h2 className="text-[clamp(30px,3.6vw,44px)] leading-[1.1]">{title}</h2>
      {children && <p className="text-lg leading-relaxed text-slate-600">{children}</p>}
    </div>
  );
}
