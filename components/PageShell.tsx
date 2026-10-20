import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Container, Pill } from "./ui";
import { DOWNLOAD_URL } from "@/lib/site";

export const h2 = "text-[clamp(26px,3vw,34px)] leading-[1.15]";
export const body = "text-[17px] leading-[1.7] text-slate-700";
export const list = "flex flex-col gap-2.5 text-[17px] leading-relaxed text-slate-800";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div>
      <SiteHeader current="other" />
      <section className="bg-brand text-white">
        <Container narrow className="flex flex-col gap-4.5 pb-16 pt-14">
          <div className="self-start"><Pill>{eyebrow}</Pill></div>
          <h1 className="text-[clamp(34px,4.4vw,52px)] leading-[1.06]">{title}</h1>
          <p className="max-w-170 text-[19px] leading-relaxed text-sky">{intro}</p>
        </Container>
      </section>
      <Container narrow className="flex flex-col gap-12 py-16">{children}</Container>
      <section className="bg-brand text-white">
        <Container narrow className="flex flex-col items-center gap-5 py-18 text-center">
          <h2 className="text-[clamp(28px,3.6vw,42px)] leading-[1.1]">Send your next email to Claude in one shortcut.</h2>
          <a href={DOWNLOAD_URL} className="rounded-xl bg-white px-7 py-3.75 text-[17px] font-semibold text-brand no-underline hover:bg-sky hover:text-brand-dark">
            Download MailtoChat for Mac
          </a>
          <p className="text-[15px] text-sky-200">
            Free during launch. Signed and notarized by Apple. For Claude Desktop and Apple Mail on a Mac with Apple Silicon, macOS 13 or later.{" "}
            <Link href="/manual" className="text-white underline underline-offset-4">Read the manual</Link>
          </p>
        </Container>
      </section>
      <SiteFooter />
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4.5">
      <h2 className={h2}>{title}</h2>
      {children}
    </section>
  );
}

export function Faq({ items }: { items: [string, string][] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map(([q, a]) => (
        <details key={q} className="rounded-[14px] border border-slate-200 bg-white px-5">
          <summary className="flex items-center justify-between gap-4 py-4.5 text-lg font-semibold leading-snug">
            {q}
            <svg className="faq-plus flex-none text-brand transition-transform duration-200" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className="pb-5 text-base leading-relaxed text-slate-600">{a}</p>
        </details>
      ))}
    </div>
  );
}

export function CompareTable({
  caption,
  heads,
  rows,
}: {
  caption: string;
  heads: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-[14px] border border-slate-200">
      <table className="w-full min-w-150 border-collapse text-left text-[15px] leading-normal">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-slate-50">
          <tr>
            {heads.map((h, i) => (
              <th key={h} scope="col" className={`px-4 py-3.5 font-semibold ${i === 1 ? "text-brand" : "text-slate-700"}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, ...cells]) => (
            <tr key={label} className="border-t border-slate-200 align-top">
              <th scope="row" className="w-[26%] px-4 py-3.5 font-semibold text-slate-900">{label}</th>
              {cells.map((c, i) => (
                <td key={i} className={`px-4 py-3.5 ${i === 0 ? "bg-sky/50 font-medium text-slate-900" : "text-slate-700"}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RelatedLinks({ items }: { items: [string, string, string][] }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-[22px] leading-tight">Related</h2>
      <div className="flex flex-wrap gap-4">
        {items.map(([href, title, text]) => (
          <Link key={href} href={href} className="flex min-w-0 flex-[1_1_260px] flex-col gap-1 rounded-[14px] border border-slate-200 bg-slate-50 p-5 no-underline hover:border-brand">
            <span className="text-[17px] font-semibold text-slate-900">{title}</span>
            <span className="text-[15px] leading-normal text-slate-600">{text}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
