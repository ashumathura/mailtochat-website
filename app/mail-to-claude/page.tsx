import type { Metadata } from "next";
import Link from "next/link";
import { CompareTable, Faq, PageShell, RelatedLinks, Section, body, list } from "@/components/PageShell";
import { JsonLd, pageSchema } from "@/components/JsonLd";
import { Kbd } from "@/components/ui";

const path = "/mail-to-claude/";
const title = "How to send Apple Mail emails to Claude";
const description =
  "Mail to Claude step by step: send the selected Apple Mail email, attachments included, to the right chat in Claude Desktop with one shortcut using MailtoChat.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title: `${title} | MailtoChat`, description },
};

const faqs: [string, string][] = [
  ["Can I send an email from Apple Mail to Claude?", "Yes. With MailtoChat installed, select an email in Apple Mail and press a shortcut such as ⌥⌘R. The email and its attachments are pasted into Claude Desktop and your prompt is added."],
  ["Does mail to Claude work with Gmail or Outlook?", "It works with any account you have added to Apple Mail, including Gmail and Outlook accounts. Gmail in a browser and the Outlook app are not supported yet."],
  ["Do I need Claude Desktop?", "Yes. MailtoChat works with the Claude desktop app, on its Chat view. Claude on the web is not supported yet."],
  ["Are my emails sent to MailtoChat?", "No. Emails, attachments and prompts go from Apple Mail to Claude Desktop on your Mac and are never sent to us."],
  ["How much does it cost?", "MailtoChat is free during the launch period."],
];

const shortcuts: string[][] = [
  ["Draft a Reply", "⌥⌘R"],
  ["Summary & Next Steps", "⌥⌘S"],
  ["Deep Dive & Research", "⌥⌘D"],
  ["Custom action 1", "⌥⌘1"],
  ["Custom action 2", "⌥⌘2"],
  ["Paste Only", "⌥⌘C"],
];

export default function Page() {
  return (
    <>
      <JsonLd data={pageSchema({ path, title, description, crumb: "Mail to Claude guide", faqs })} />
      <PageShell
        eyebrow="Mail to Claude guide"
        title="Mail to Claude: how to send Apple Mail emails to Claude Desktop"
        intro="Mail to Claude means getting an email out of Apple Mail and into the right Claude chat, with its attachments and your instruction. Here is how to do it in one shortcut instead of five manual steps."
      >
        <Section title="What you need">
          <ul className={list}>
            <li><strong>A Mac</strong> with Apple Silicon, running macOS 13 or later.</li>
            <li><strong>Apple Mail</strong>, with the accounts you want to use added to it.</li>
            <li><strong>Claude Desktop</strong>, installed and kept on its Chat view.</li>
            <li><strong>MailtoChat</strong>, a small menu bar app that does the sending. It is free during launch.</li>
          </ul>
        </Section>

        <Section title="Send an email to Claude in four steps">
          <ol className="flex list-decimal flex-col gap-3 pl-5.5 text-[17px] leading-relaxed text-slate-800">
            <li><strong>Install MailtoChat</strong> and open it. The app is signed and notarized by Apple, and it lives in your menu bar. When macOS asks, allow Automation for Mail and Accessibility, so it can read the selected email and paste into Claude.</li>
            <li><strong>Select an email</strong> in Apple Mail, from any of your mailboxes.</li>
            <li className="[&_kbd]:mx-0.5"><strong>Press a shortcut</strong> such as <Kbd>⌥⌘R</Kbd> to draft a reply, or choose an action from the menu bar icon.</li>
            <li><strong>Claude takes it from there.</strong> The email, its details and every attachment land in the chat or project you chose, and your prompt runs.</li>
          </ol>
          <p className={body}>The first time an email has no route, MailtoChat asks where it should go. Save your choice and the next email from that sender goes there by itself.</p>
        </Section>

        <Section title="Why not just copy and paste?">
          <p className={body}>You can, and for a one-off email it is fine. The cost shows up when email is part of your day: you copy the text, switch to Claude, hunt for the right chat, paste, re-attach the files and retype the same instruction. We compared the two in detail in{" "}
            <Link href="/compare/copy-paste/" className="font-semibold">MailtoChat vs copy-pasting emails into Claude</Link>.</p>
        </Section>

        <Section title="Get better replies: one chat per client">
          <p className={body}>Claude remembers what is in a chat or project: your tone, decisions already made, files you shared. If every email starts a new chat, none of that exists. A <strong>route</strong> links a sender, a recipient or a whole domain to a specific chat or project, so each new email lands where the history already is. Add a standing instruction such as &ldquo;Always reply formally, in Dutch&rdquo; and it travels with every email on that route.</p>
          <p className={body}>See <Link href="/manual#routes" className="font-semibold">how routes work</Link> in the manual.</p>
        </Section>

        <Section title="Add your prompt once">
          <p className={body}>Each action has its own name, shortcut and prompt, so you write the instruction once. MailtoChat has six action slots:</p>
          <CompareTable caption="MailtoChat actions and default shortcuts" heads={["Action", "Shortcut"]} rows={shortcuts} />
          <p className={body}>The three presets cover replies, summaries and research. The two custom slots can run anything Claude can do with an email, such as adding a row to a spreadsheet or opening a ticket from your template.</p>
        </Section>

        <Section title="Frequently asked questions">
          <Faq items={faqs} />
        </Section>

        <RelatedLinks
          items={[
            ["/compare/copy-paste/", "MailtoChat vs copy-pasting", "Where a shortcut saves time, and when copy-paste is enough."],
            ["/compare/mailtoclaude/", "MailtoChat vs Mail to Claude", "A feature and price comparison with mailtoclaude.com."],
            ["/manual", "User manual", "Setup, routes, prompts and troubleshooting."],
          ]}
        />
      </PageShell>
    </>
  );
}
