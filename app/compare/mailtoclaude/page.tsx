import type { Metadata } from "next";
import Link from "next/link";
import { CompareTable, Faq, PageShell, RelatedLinks, Section, body, list } from "@/components/PageShell";
import { JsonLd, pageSchema } from "@/components/JsonLd";
import { SUPPORT_EMAIL } from "@/lib/site";

const path = "/compare/mailtoclaude/";
const title = "MailtoChat vs Mail to Claude (mailtoclaude.com)";
const description =
  "Compare MailtoChat with Mail to Claude (mailtoclaude.com): price, shortcuts, prompts, routing to chats and projects, requirements and privacy.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title: `${title} | MailtoChat`, description },
};

const NL = "Not listed on their site";

const faqs: [string, string][] = [
  ["What is the difference between MailtoChat and Mail to Claude?", "Both send the selected Apple Mail email to Claude Desktop with a shortcut. MailtoChat adds six action slots with their own prompts and shortcuts, routes that send each sender or domain to a chosen chat or project, standing instructions, an activity log and an auto-send switch, and is free during launch."],
  ["Is MailtoChat affiliated with mailtoclaude.com?", "No. They are separate, independent products. This comparison uses the public information on their site, and we have tried to state only what it says."],
  ["Which one supports older Macs?", "Mail to Claude lists macOS 12 (Monterey) or later. MailtoChat needs macOS 13 or later on a Mac with Apple Silicon."],
];

export default function Page() {
  return (
    <>
      <JsonLd data={pageSchema({ path, title, description, crumb: "MailtoChat vs Mail to Claude", faqs })} />
      <PageShell
        eyebrow="Comparison"
        title="MailtoChat vs Mail to Claude (mailtoclaude.com)"
        intro="Two Mac menu bar apps with the same starting idea: select an email in Apple Mail, press a shortcut, and it appears in Claude Desktop. Here is how they differ."
      >
        <Section title="At a glance">
          <CompareTable
            caption="MailtoChat compared with Mail to Claude"
            heads={["Feature", "MailtoChat", "Mail to Claude"]}
            rows={[
              ["Price", "Free during launch.", "30-day free trial, then $19 a year."],
              ["Works with", "Apple Mail and Claude Desktop.", "Apple Mail and Claude Desktop."],
              ["Shortcuts and actions", "Six action slots, each with its own name and shortcut: Draft a Reply, Summary & Next Steps, Deep Dive & Research, two of your own, and Paste Only.", "One shortcut, by default Shift + Option + C."],
              ["Prompts", "A prompt per action, placed above the email. Two custom slots for your own.", NL],
              ["Send to the right chat", "Routes match the sender, recipient or a whole domain and open a chosen chat, a new chat in a project, a fresh chat or incognito.", NL],
              ["Standing instructions", "A line per route, such as “Always reply formally, in Dutch”.", NL],
              ["Auto-send or review first", "Your choice. Paste Only never submits.", NL],
              ["Attachments", "Every attachment goes along. Images under 15 KB are skipped.", "Images, PDFs, Word, Excel, CSV, text files and zip archives."],
              ["Activity log", "A searchable log on your Mac. Clear it or switch it off.", NL],
              ["Privacy", "Emails, attachments and prompts never go to us.", "States that data is processed locally and sent directly to Claude Desktop."],
              ["Mailboxes", "Unlimited, any account in Apple Mail.", "Any account in Apple Mail."],
              ["Requirements", "macOS 13 or later, Apple Silicon.", "macOS 12 (Monterey) or later."],
            ]}
          />
          <p className="text-[14px] leading-normal text-slate-600">
            Mail to Claude details are taken from the public pages of mailtoclaude.com as we found them on 19 October 2026. &ldquo;{NL}&rdquo; means we did not find it there, not that it does not exist. MailtoChat is an independent app and is not affiliated with Mail to Claude or Anthropic. If something here is out of date, please tell us at {SUPPORT_EMAIL}.
          </p>
        </Section>

        <Section title="Where MailtoChat goes further">
          <ul className={list}>
            <li><strong>Routes, so the right chat opens by itself.</strong> Link a sender or domain to one chat or project and Claude keeps the memory, files and tone for that client, instead of starting from zero each time.</li>
            <li><strong>Prompts you write once.</strong> Six actions, each with its own shortcut, so &ldquo;draft a reply&rdquo; and &ldquo;summarise and list next steps&rdquo; are one keystroke apart.</li>
            <li><strong>Control over sending.</strong> Auto-send for instant results, or review the prompt first.</li>
            <li><strong>An activity log</strong> that stays on your Mac, with links back to the email and the chat.</li>
            <li><strong>Free during launch.</strong> No trial clock and no card.</li>
          </ul>
        </Section>

        <Section title="Where Mail to Claude may suit you better">
          <ul className={list}>
            <li><strong>You are on macOS 12.</strong> MailtoChat needs macOS 13 or later and Apple Silicon.</li>
            <li><strong>You want one shortcut and nothing else to configure.</strong> If you only ever paste the email and write your own prompt, a single shortcut may be all you need.</li>
          </ul>
        </Section>

        <Section title="Which should you choose?">
          <p className={body}>If you send emails to Claude from several clients or topics and want each in its own chat with your instruction already running, MailtoChat does that and is free while we launch. If you are on an older Mac, or want the simplest possible tool, check what suits you on their site. Either way, both beat copying and pasting; see{" "}
            <Link href="/compare/copy-paste/" className="font-semibold">MailtoChat vs copy-pasting</Link> or the{" "}
            <Link href="/mail-to-claude/" className="font-semibold">Mail to Claude guide</Link>.</p>
        </Section>

        <Section title="Frequently asked questions">
          <Faq items={faqs} />
        </Section>

        <RelatedLinks
          items={[
            ["/mail-to-claude/", "Mail to Claude guide", "Send Apple Mail emails to Claude in four steps."],
            ["/compare/copy-paste/", "MailtoChat vs copy-pasting", "Where a shortcut saves time, and when copy-paste is enough."],
          ]}
        />
      </PageShell>
    </>
  );
}
