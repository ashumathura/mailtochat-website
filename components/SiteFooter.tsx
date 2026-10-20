import Image from "next/image";
import Link from "next/link";
import { Container } from "./ui";
import { CookieSettings } from "./CookieSettings";
import { LEGAL, SUPPORT_EMAIL, asset } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex flex-wrap items-center justify-between gap-5 py-8">
        <div className="flex items-center gap-2 font-display text-[26px] font-bold">
          <Image src={asset("/logo.png")} alt="" width={64} height={64} className="block size-16" />
          <span>MailtoChat</span>
        </div>
        <div className="flex flex-wrap gap-5 text-[15px]">
          <Link href="/#faq" className="text-slate-700 no-underline hover:text-brand">FAQ</Link>
          <Link href="/mail-to-claude/" className="text-slate-700 no-underline hover:text-brand">Mail to Claude guide</Link>
          <Link href="/compare/copy-paste/" className="text-slate-700 no-underline hover:text-brand">vs copy-paste</Link>
          <Link href="/compare/mailtoclaude/" className="text-slate-700 no-underline hover:text-brand">vs Mail to Claude</Link>
          <Link href="/manual" className="text-slate-700 no-underline hover:text-brand">User manual</Link>
          <Link href="/manual#privacy" className="text-slate-700 no-underline hover:text-brand">Privacy</Link>
          <CookieSettings />
          <span className="text-slate-600">Support: {SUPPORT_EMAIL}</span>
        </div>
      </Container>
      <Container className="pb-8">
        <p className="text-[13px] leading-relaxed text-slate-600">{LEGAL}</p>
      </Container>
    </footer>
  );
}
