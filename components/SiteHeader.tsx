import Image from "next/image";
import Link from "next/link";
import { Container } from "./ui";
import { asset } from "@/lib/site";

type Current = "home" | "manual";

const link = "text-[15px] font-medium text-slate-700 no-underline hover:text-brand";

export function SiteHeader({ current = "home" }: { current?: Current }) {
  const onHome = current === "home";
  const anchor = (hash: string) => (onHome ? hash : `/${hash}`);
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-2.5">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-3xl font-bold tracking-tight text-slate-900 no-underline"
        >
          <Image src={asset("/logo.png")} alt="" width={72} height={72} priority className="block size-18" />
          <span>MailtoChat</span>
        </Link>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-5.5">
          <Link href={anchor("#how")} className={link}>How it works</Link>
          <Link href={anchor("#features")} className={link}>Features</Link>
          <Link href={anchor("#use-cases")} className={link}>Use cases</Link>
          <Link href={anchor("#faq")} className={link}>FAQ</Link>
          <Link
            href="/manual"
            className={`text-[15px] no-underline ${current === "manual" ? "font-bold text-brand" : "font-medium text-slate-700 hover:text-brand"}`}
          >
            Manual
          </Link>
          <Link
            href={anchor("#download")}
            className="rounded-[10px] bg-brand px-4.5 py-2.5 text-[15px] font-semibold text-white no-underline hover:bg-brand-dark hover:text-white"
          >
            Get MailtoChat
          </Link>
        </nav>
      </Container>
    </header>
  );
}
