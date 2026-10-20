import type { Metadata } from "next";
import Link from "next/link";
import { CompareTable, Faq, PageShell, RelatedLinks, Section, body, list } from "@/components/PageShell";
import { JsonLd, pageSchema } from "@/components/JsonLd";

const path = "/compare/copy-paste/";
const title = "MailtoChat vs copy-pasting emails into Claude";
const description =
  "Compare sending emails to Claude by copy and paste with MailtoChat: steps per email, attachments, finding the right chat, repeated prompts and cost.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title: `${title} | MailtoChat`, description },
};

const faqs: [string, string][] = [
  ["Is copy-pasting emails into Claude bad?", "No. It works anywhere, needs no install and is fine for the occasional email. It gets slow when you do it many times a day, with attachments, or across several clients."],
  ["Does MailtoChat paste attachments too?", "Yes. Every attachment goes along, whatever its type. Tiny images under 15 KB, such as logos and signature graphics, are skipped."],
  ["Can I still copy and paste when I want to?", "Of course. MailtoChat only runs when you press a shortcut. Nothing watches your inbox."],
];

export default function Page() {
  return (
    <>
      <JsonLd data={pageSchema({ path, title, description, crumb: "MailtoChat vs copy-paste", faqs })} />
      <PageShell
        eyebrow="Comparison"
        title="MailtoChat vs copy-pasting emails into Claude"
        intro="Copy and paste is how most people start. This is what changes when you send mail to Claude with a shortcut instead, and when copy and paste is still the better choice."
      >
        <Section title="At a glance">
          <CompareTable
            caption="MailtoChat compared with copy and paste"
            heads={["Feature", "MailtoChat", "Copy and paste"]}
            rows={[
              ["Steps per email", "Select the email, press a shortcut.", "Select the text, copy, switch to Claude, find the chat, paste, add files, type your instruction."],
              ["Attachments", "Sent along with the email automatically.", "Added by hand, one at a time."],
              ["Finding the right chat", "Routes match the sender, recipient or domain and open the right chat or project.", "You search the sidebar every time, or start a new chat."],
              ["Your instruction", "Set once per action, plus an optional route prompt per route.", "Retyped for every email."],
              ["Email details", "From, To, Cc, date, subject and body are included.", "Only what you select and copy."],
              ["Works with", "Apple Mail and Claude Desktop, on an Apple Silicon Mac with macOS 13 or later.", "Any mail client and any version of Claude, on any device."],
              ["Setup", "Install a menu bar app and allow two macOS permissions.", "None."],
              ["Cost", "Free during launch.", "Free."],
            ]}
          />
        </Section>

        <Section title="Where copy and paste works fine">
          <ul className={list}>
            <li>You send an email to Claude a few times a week, not a few times a day.</li>
            <li>You use Outlook, Gmail in a browser, Claude on the web or your phone. MailtoChat does not support those yet.</li>
            <li>You are on an Intel Mac or an older macOS.</li>
          </ul>
        </Section>

        <Section title="Where it costs you time">
          <ul className={list}>
            <li><strong>Copy, switch, paste.</strong> Select the text, open Claude, find the window, paste, and hope the attachments made it across.</li>
            <li><strong>Which chat was it?</strong> You keep a chat or project per client or topic, and finding the right one takes longer than the reply.</li>
            <li><strong>The sidebar overflows.</strong> Skip the hunt and you open a new chat every time, with none of the context Claude needs.</li>
            <li><strong>The same instruction, again.</strong> Draft a reply, summarise, list next steps, retyped for every email.</li>
          </ul>
          <p className={body}>MailtoChat removes all four. Routes also mean replies come from a chat that already knows the client, which usually gives sharper answers than a brand-new chat. The step-by-step version is in our{" "}
            <Link href="/mail-to-claude/" className="font-semibold">Mail to Claude guide</Link>.</p>
        </Section>

        <Section title="Which should you use?">
          <p className={body}>If you only send an email to Claude now and then, or you are not on Apple Mail and Claude Desktop, keep copying and pasting. If email is a daily input to your work on a Mac, a shortcut that picks the chat, attaches the files and runs your prompt saves the same five steps every time.</p>
        </Section>

        <Section title="Frequently asked questions">
          <Faq items={faqs} />
        </Section>

        <RelatedLinks
          items={[
            ["/mail-to-claude/", "Mail to Claude guide", "Send Apple Mail emails to Claude in four steps."],
            ["/compare/mailtoclaude/", "MailtoChat vs Mail to Claude", "A feature and price comparison with mailtoclaude.com."],
          ]}
        />
      </PageShell>
    </>
  );
}
