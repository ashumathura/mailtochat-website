import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Callout, Container, Kbd, Pill } from "@/components/ui";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "MailtoChat user manual",
  description:
    "Set up MailtoChat, route emails to the right Claude chat, and get the most from your prompts.",
};

const toc: [string, string][] = [
  ["start", "Getting started"],
  ["use", "Sending an email"],
  ["routes", "Chat routes"],
  ["prompts", "Prompts and shortcuts"],
  ["sent", "What gets sent"],
  ["log", "Activity log"],
  ["settings", "General settings"],
  ["license", "License and updates"],
  ["privacy", "Privacy"],
  ["trouble", "Troubleshooting"],
];

const actions: [string, string][] = [
  ["Draft a Reply", "⌥⌘R"],
  ["Summary & Next Steps", "⌥⌘S"],
  ["Deep Dive & Research", "⌥⌘D"],
  ["Custom action 1", "⌥⌘1"],
  ["Custom action 2", "⌥⌘2"],
  ["Paste Only", "⌥⌘C"],
];

const trouble: [string, string][] = [
  ["“Can’t find the chat” or an error in Claude", "Claude Desktop is probably on the Code view. Switch it to Chat and send again."],
  ["Nothing gets pasted", "Check that Accessibility is granted in the General settings, and that Automation for Mail is allowed in macOS System Settings under Privacy & Security."],
  ["The email lands before the chat has loaded", "Increase “Wait for Claude to load a chat” in the General settings."],
  ["The email went to the wrong chat", "Use Test your routes with the sender’s address. A full address beats a domain, and a route higher in the list beats one lower down. Drag routes to reorder them."],
  ["A custom action is missing from the menu", "Custom actions appear only once they have both a name and a prompt."],
];

const h2 = "text-[32px] leading-[1.15]";
const h3 = "mt-1.5 text-[22px] leading-tight";
const p = "text-base leading-[1.65] text-slate-700";
const lead = "text-[17px] leading-[1.65] text-slate-700";
const list = "flex flex-col gap-2.5 text-base leading-relaxed text-slate-800";
const infoCard = "min-w-0 flex-[1_1_200px] rounded-[14px] border border-slate-200 bg-slate-50 p-4.5";
const infoLabel = "text-[13px] font-semibold uppercase tracking-[0.06em] text-brand";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="flex scroll-mt-6 flex-col gap-4.5">
      <h2 className={h2}>{title}</h2>
      {children}
    </section>
  );
}

export default function Manual() {
  return (
    <div>
      <SiteHeader current="manual" />

      <section className="bg-brand text-white">
        <Container className="flex flex-col gap-4.5 pb-17 pt-16">
          <div className="self-start"><Pill>For Claude Desktop on Mac</Pill></div>
          <h1 className="text-[clamp(36px,4.6vw,56px)] leading-[1.05]">MailtoChat user manual</h1>
          <p className="max-w-170 text-[19px] leading-relaxed text-sky">
            Everything you need to set up MailtoChat, route emails to the right Claude chat, and get the most from your prompts.
          </p>
        </Container>
      </section>

      <Container className="flex flex-wrap items-start gap-12 pb-22 pt-12">
        <aside className="min-w-0 flex-[0_0_240px] lg:sticky lg:top-6">
          <nav aria-label="Manual contents" className="flex flex-col gap-0.5">
            <p className="px-3 pb-2 text-[13px] font-semibold uppercase tracking-[0.06em] text-slate-600">On this page</p>
            {toc.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="block rounded-lg px-3 py-2 text-[15px] font-medium text-slate-700 no-underline hover:bg-sky hover:text-brand-dark">
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="flex min-w-0 flex-[999_1_560px] flex-col gap-14">
          <Section id="start" title="Getting started">
            <p className={lead}>MailtoChat is a small menu bar app. It reads the email you have selected in Apple Mail and pastes it into Claude Desktop, in the chat or project you choose.</p>
            <div className="flex flex-wrap gap-3.5">
              {[
                ["Mac", "Apple Silicon, macOS 13 or later"],
                ["Mail", "Apple Mail, with your accounts added"],
                ["Claude", "Claude Desktop, on its Chat view"],
              ].map(([l, t]) => (
                <div key={l} className={infoCard}>
                  <p className={infoLabel}>{l}</p>
                  <p className="mt-1 text-base font-semibold">{t}</p>
                </div>
              ))}
            </div>
            <h3 className={h3}>Allow two permissions</h3>
            <p className={p}>macOS asks you to approve two things the first time you use the app. Without them MailtoChat cannot do its job.</p>
            <ul className={list}>
              <li><strong>Automation (Mail).</strong> Lets MailtoChat read the email you have selected in Apple Mail.</li>
              <li><strong>Accessibility.</strong> Lets MailtoChat find your chat in Claude Desktop and paste into it. The General settings show whether it is granted.</li>
            </ul>
            <Callout>
              <strong>Claude Desktop only, for now.</strong> MailtoChat works with the Claude desktop app and Apple Mail. Outlook, Gmail in a browser, Claude on the web and Intel Macs are not supported yet.
            </Callout>
          </Section>

          <Section id="use" title="Sending an email">
            <ol className="flex list-decimal flex-col gap-3 pl-5.5 text-[17px] leading-relaxed text-slate-800">
              <li>In Apple Mail, click the email you want to send. It can be from any account.</li>
              <li>Press an action shortcut, or click the MailtoChat icon in the menu bar and choose an action.</li>
              <li>MailtoChat finds the route that matches the email and opens the right chat in Claude Desktop.</li>
              <li>The email, its details and its attachments are pasted in. If the action has a prompt and auto-send is on, it is submitted.</li>
            </ol>
            <Callout>
              <strong>Keep Claude Desktop on Chat.</strong> MailtoChat looks for your chat or project in the Chat sidebar. If Claude Desktop is showing the Code view, it cannot find the chat and shows an error. Switch to Chat and send the email again.
            </Callout>
          </Section>

          <Section id="routes" title="Chat routes">
            <p className={lead}>A route says: when an email matches this, put it in that place in Claude. Routes keep the context of a client, team or topic in one chat or project, and stop your sidebar filling with one-off chats.</p>
            <Callout>
              <strong>Why this gives better replies.</strong> A chat or project remembers. Over time it holds your tone, the decisions made, and the files and artifacts you have shared. Each new email lands in a place that already knows the story, so replies are sharper than in a brand-new chat that starts from zero. Train it once, then keep using it.
            </Callout>
            <h3 className="text-[22px] leading-tight">Add a route</h3>
            <p className={p}>Open Routes in the app and choose Add Route. Each route has these parts:</p>
            <ul className={list}>
              <li><strong>When an email is...</strong> Choose <em>Sent to (To)</em> for mail you send, or <em>Received from (From)</em> for mail you receive. A route checks one field.</li>
              <li><strong>Who it applies to.</strong> Choose <em>Anyone at a domain</em>, which also covers its subdomains, or <em>One email address</em>.</li>
              <li><strong>...put it in Claude.</strong> Choose <em>Send it to</em>: an existing chat, a new chat in a project, a new chat, or an incognito chat.</li>
              <li><strong>Standing instructions (optional).</strong> A line added to every email on this route, such as “Always reply formally, in Dutch.”</li>
            </ul>
            <p className={p}>The Result line at the bottom of the window restates the route in plain words, so you can check it before saving.</p>
            <h3 className={h3}>Which route wins</h3>
            <ul className={list}>
              <li>A full email address beats a domain.</li>
              <li>Between routes of the same kind, the one higher in the list wins. Drag routes to reorder them.</li>
              <li>Use <strong>Test your routes</strong> to type an address and see which route applies, and why.</li>
            </ul>
            <h3 className={h3}>When no route matches</h3>
            <p className={p}>A window asks where the email should go. Choose a place, then pick one of three buttons:</p>
            <ul className={list}>
              <li><strong>Save</strong> stores your choice as a new route.</li>
              <li><strong>Just This Once</strong> uses it for this email only.</li>
              <li><strong>Cancel</strong> sends nothing.</li>
            </ul>
            <p className={p}>If you would rather not be asked, untick <em>Ask where to send emails that have no route</em> in the settings, or tick <em>Don’t ask again</em> in the window. Unrouted emails then go to a new chat.</p>
          </Section>

          <Section id="prompts" title="Prompts and shortcuts">
            <p className={lead}>MailtoChat has six action slots. Each one has a name, a shortcut and a mode.</p>
            <div className="overflow-hidden rounded-[14px] border border-slate-200">
              <div className="flex justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4.5 py-3.5 text-sm font-semibold text-slate-600">
                <span>Action</span><span>Shortcut</span>
              </div>
              {actions.map(([name, key]) => (
                <div key={name} className="flex items-center justify-between gap-3 border-b border-slate-200 px-4.5 py-3.5 text-base last:border-b-0">
                  <span>{name}</span><Kbd>{key}</Kbd>
                </div>
              ))}
            </div>
            <h3 className={h3}>Two modes</h3>
            <ul className={list}>
              <li><strong>Paste the email only.</strong> The email goes into the chat and nothing else.</li>
              <li><strong>Add a prompt to the email.</strong> Your prompt is placed above the email. The route’s standing instructions follow.</li>
            </ul>
            <h3 className={h3}>Make your own actions</h3>
            <p className={p}>The two custom slots stay out of the menu until you give them a name and a prompt. Write the instruction you keep retyping, such as “Extract the name, company and request and add them as a row in my leads spreadsheet.” Anything Claude can do with an email can be an action.</p>
            <h3 className={h3}>Send automatically, or review first</h3>
            <p className={p}>With <em>Send to Claude automatically</em> on, actions with a prompt are submitted right after pasting. Turn it off to read the prompt first and press send yourself. Paste Only never submits.</p>
          </Section>

          <Section id="sent" title="What gets sent">
            <ul className={list}>
              <li><strong>The email.</strong> Sender, recipients, date, subject and body.</li>
              <li><strong>Attachments.</strong> Every attachment goes along, whatever its type. Tiny images under 15 KB, such as logos and signature graphics, are skipped.</li>
              <li><strong>Temporary files.</strong> Attachments are copied to a temporary location that only your user can open. They are removed after sending or on failure, and anything older than an hour is swept when the app launches.</li>
              <li><strong>Your clipboard.</strong> MailtoChat pastes on your behalf and then restores what you had copied.</li>
            </ul>
          </Section>

          <Section id="log" title="Activity log">
            <p className={lead}>The Activity tab lists what you sent and where. It is plain text, stored on your Mac, and searchable. Click a subject to open the email in Mail, or click the route to jump to its chat in Claude. You can clear the log or switch it off.</p>
          </Section>

          <Section id="settings" title="General settings">
            <ul className={list}>
              <li><strong>Send to Claude automatically.</strong> Whether prompts are submitted straight after pasting.</li>
              <li><strong>Ask where to send emails that have no route.</strong> Turn off to always open a new chat for unrouted mail.</li>
              <li><strong>Wait for Claude to load a chat.</strong> A slider for how long MailtoChat waits after opening a chat before pasting. The default is 1.5 seconds. If emails land before the chat has loaded, raise it.</li>
              <li><strong>Accessibility status.</strong> Shows whether the permission is granted.</li>
            </ul>
          </Section>

          <Section id="license" title="License and updates">
            <p className={lead}>MailtoChat is free during the launch period. Your license key lives in the License &amp; Privacy tab. Once a week the app checks for updates and confirms your license. Usage analytics are optional and shown as a choice in the same tab.</p>
          </Section>

          <Section id="privacy" title="Privacy">
            <p className={lead}>MailtoChat never sends your emails, attachments or prompts to us. They travel from Apple Mail to Claude Desktop on your Mac. The only things that leave your Mac through MailtoChat are the weekly update and license check, plus optional analytics if you choose to share them. Once an email is in Claude, it is handled under Claude’s own terms, as if you had pasted it yourself.</p>
          </Section>

          <Section id="trouble" title="Troubleshooting">
            <div className="flex flex-col gap-3">
              {trouble.map(([q, a]) => (
                <div key={q} className="rounded-[14px] border border-slate-200 bg-slate-50 px-5 py-4.5">
                  <h3 className="text-[19px] leading-tight">{q}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-slate-700">{a}</p>
                </div>
              ))}
            </div>
            <p className={p}>Still stuck? Contact support at {SUPPORT_EMAIL}.</p>
          </Section>
        </main>
      </Container>

      <SiteFooter />
    </div>
  );
}
