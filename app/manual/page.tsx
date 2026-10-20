import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Callout, Container, Kbd, Pill } from "@/components/ui";
import {
  AddRouteMock, ChatPickerMock, Figure, MenuPanelMock, NoRouteMock, ProjectPickerMock, RoutesListMock, SeveralEmailsMock,
} from "@/components/mockups";

export const metadata: Metadata = {
  title: "User manual: send Apple Mail emails to Claude",
  description:
    "How to set up MailtoChat, route emails from Apple Mail to the right Claude chat or project, write your own prompts and shortcuts, and fix common problems.",
  alternates: { canonical: "/manual/" },
  openGraph: { url: "/manual/", title: "MailtoChat user manual" },
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
  ["about", "About and support"],
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
  ["“Claude is showing Code, not Chat”, or “Can’t find the chat”", "MailtoChat reads and opens chats and projects from Claude Desktop’s Chat view. Switch Claude to Chat, then send again or press Refresh in the route window."],
  ["The chat or project list is empty", "Claude Desktop must be running, on its Chat view, with its sidebar showing. Check that Accessibility is granted in the General settings, then press Refresh Chat List (or Refresh Project List) in the route window. The line next to the button says when the list was updated and what it found, or why it found nothing."],
  ["I selected several emails but only one was sent", "MailtoChat sends one email at a time: the first one selected in Mail. It tells you when you have selected more and lets you cancel."],
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
                ["Mac", "Apple Silicon, macOS 14 or later"],
                ["Mail", "Apple Mail, with your accounts added"],
                ["Claude", "Claude Desktop, on its Chat view"],
              ].map(([l, t]) => (
                <div key={l} className={infoCard}>
                  <p className={infoLabel}>{l}</p>
                  <p className="mt-1 text-base font-semibold">{t}</p>
                </div>
              ))}
            </div>
            <h3 className={h3}>Install it</h3>
            <p className={p}>Download MailtoChat from the website and open it. The app is signed with an Apple Developer ID and notarized by Apple, so macOS can verify who made it and that Apple has scanned it for malicious content before it opens. Like any app downloaded from the internet, macOS may still ask you to confirm the first time. Choose <em>Open</em>.</p>
            <h3 className={h3}>First launch</h3>
            <p className={p}>The first time it opens, MailtoChat asks for two things. First, whether you want to share anonymous usage analytics. It is your choice, and you can change it any time. Second, your email address, which it uses to issue a free license key and save it for you. The key lets the app download updates. Without it the app keeps working, but it cannot update itself. You can also get the key later in the License &amp; Privacy tab.</p>
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
              <li>Press an action shortcut, or click the MailtoChat icon in the menu bar. A panel lists your actions with their shortcuts, and has buttons for updates, settings, supporting the app and quitting.</li>
              <li>MailtoChat finds the route that matches the email and opens the right chat in Claude Desktop.</li>
              <li>The email, its details and its attachments are pasted in. If the action has a prompt and auto-send is on, it is submitted.</li>
            </ol>
            <Figure
              label="The MailtoChat menu bar panel: a list of actions with their shortcuts, and buttons for updates, settings, support and quit."
              caption="The panel that opens from the MailtoChat icon in the menu bar."
            >
              <MenuPanelMock />
            </Figure>
            <Callout>
              <strong>Keep Claude Desktop on Chat.</strong> MailtoChat looks for your chat or project in the Chat sidebar. If Claude Desktop is showing the Code view (or Cowork), it says so and asks you to switch to Chat. Switch, then send the email again.
            </Callout>
            <Callout>
              <strong>One email at a time.</strong> If you select several emails in Mail, only the first one is sent. MailtoChat tells you how many you selected and shows the subject of the one that will go, so you can send it or cancel. You can turn this warning off in the General settings.
            </Callout>
            <Figure
              label="A dialog saying 3 emails are selected and only the first will be sent, with the buttons Send First Email and Cancel."
              caption="The warning when several emails are selected."
            >
              <SeveralEmailsMock />
            </Figure>
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
              <li><strong>Route prompt (optional).</strong> Text added after the action’s prompt every time an email uses this route, so one action can behave differently per client or sender. For example: “Always reply formally, in Dutch.” Actions set to paste only do not use it.</li>
            </ul>
            <p className={p}>The Result line at the bottom of the window restates the route in plain words, so you can check it before saving. Open <em>Preview what Claude receives</em> to see the exact text Claude gets for a sample email, with your route prompt in place.</p>
            <Figure
              label="The Add Route window: when an email is received from anyone at acme.com, put it in a new chat in the Acme project, with the route prompt Always reply formally, in Dutch."
              caption="The Add Route window."
            >
              <AddRouteMock />
            </Figure>
            <h3 className={h3}>Choosing the chat or project</h3>
            <ul className={list}>
              <li><strong>Existing chat.</strong> Pick it from the list. The list comes from Claude Desktop’s sidebar, grouped by project, with your recent chats last. It leaves out Claude’s own entries such as New, Scheduled and Design. You can also paste a chat link, which is the most reliable way to find it.</li>
              <li><strong>New chat in a project.</strong> Pick the project from the dropdown of projects Claude shows in its sidebar. Choose <em>Other</em> to type the name of a project that is not listed. A project link is optional and the most reliable.</li>
              <li><strong>Refresh.</strong> Press <em>Refresh Chat List</em> (or <em>Refresh Project List</em>) after you add a chat or project in Claude. The line beside the button shows when the list was last updated and how many chats and projects were found.</li>
            </ul>
            <div className="flex flex-wrap items-start gap-6">
              <Figure
                label="The chat picker open: chats grouped under their project, with recent chats last, and a Refresh Chat List button with the time it was updated."
                caption="Picking an existing chat."
              >
                <ChatPickerMock />
              </Figure>
              <Figure
                label="The project picker open: a list of projects and an Other option to type a name, with a Refresh Project List button."
                caption="Picking a project."
              >
                <ProjectPickerMock />
              </Figure>
            </div>
            <h3 className={h3}>Which route wins</h3>
            <ul className={list}>
              <li>A full email address beats a domain.</li>
              <li>Between routes of the same kind, the one higher in the list wins. Drag routes to reorder them.</li>
              <li>Use <strong>Test your routes</strong> to type an address and see which route applies, and why.</li>
            </ul>
            <Figure
              label="The Routes tab: a list of four routes with their field, kind and destination, a Test your routes box and its result."
              caption="The Routes tab, with the route tester."
            >
              <RoutesListMock />
            </Figure>
            <h3 className={h3}>When no route matches</h3>
            <p className={p}>A window asks where the email should go. Choose a place, then pick one of three buttons:</p>
            <ul className={list}>
              <li><strong>Save</strong> stores your choice as a new route.</li>
              <li><strong>Just This Once</strong> uses it for this email only.</li>
              <li><strong>Cancel</strong> sends nothing.</li>
            </ul>
            <p className={p}>If you would rather not be asked, untick <em>Ask where to send emails that have no route</em> in the settings, or tick <em>Don’t ask again</em> in the window. Unrouted emails then go to a new chat.</p>
            <Figure
              label="The No route for this email yet window, with the sender's domain filled in and the buttons Cancel, Just This Once and Save."
              caption="The window that asks where an email should go."
            >
              <NoRouteMock />
            </Figure>
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
              <li><strong>Add a prompt to the email.</strong> Your prompt is placed above the email. The route prompt, if the route has one, follows it.</li>
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
              <li><strong>Warn when several emails are selected.</strong> On by default. Only the first selected email is sent, and this warns you when you have selected more.</li>
              <li><strong>Accessibility status.</strong> Shows whether the permission is granted.</li>
            </ul>
          </Section>

          <Section id="license" title="License and updates">
            <p className={lead}>MailtoChat is free during the launch period. A free license key lets the app download updates, and it does not expire.</p>
            <ul className={list}>
              <li><strong>Getting a key.</strong> On first launch the app asks for your email address and issues one key per address. You can also do it later in the License &amp; Privacy tab. The key is saved for you; there is no email to wait for.</li>
              <li><strong>Where it lives.</strong> The License &amp; Privacy tab shows your key, the address it was issued to, and whether it is valid. <em>Remove License</em> clears the key and the address from the app.</li>
              <li><strong>Updates.</strong> When the app opens, and about once a week, it checks for a newer version and confirms your license. If there is one, it asks, downloads it, checks that it is signed by the same developer, installs it and reopens. Your permissions are kept. Use <em>Check for Updates</em> in the menu bar panel to check at any time.</li>
              <li><strong>No key.</strong> Everything else keeps working. The app just cannot download updates.</li>
            </ul>
            <p className={p}>Usage analytics are optional and shown as a choice in the License &amp; Privacy tab.</p>
          </Section>

          <Section id="privacy" title="Privacy">
            <p className={lead}>MailtoChat never sends your emails, attachments or prompts to us. They travel from Apple Mail to Claude Desktop on your Mac. The only things that leave your Mac through MailtoChat are the update and license check, the email address you give to get a free license key, and optional analytics if you choose to share them. The address is stored with your key only to issue and manage the license, and never alongside your emails or prompts. <em>Erase My Data on the Server</em> in the License &amp; Privacy tab deletes what is stored for your install and removes the address from your key. Once an email is in Claude, it is handled under Claude’s own terms, as if you had pasted it yourself.</p>
            <p className={p}>This website, not the app, uses Google Analytics to count visits and downloads. It only runs after you accept in the banner, and you can change your choice any time with <em>Cookie settings</em> in the footer.</p>
          </Section>

          <Section id="about" title="About and support">
            <p className={lead}>The About tab in the settings tells why MailtoChat was built, and has the ways to support it and get in touch.</p>
            <ul className={list}>
              <li><strong>Support the app.</strong> MailtoChat is free for now. If you like it, a donation helps keep it free and pays for maintaining and improving it. The link opens in your browser, and the app sends nothing to the payment service. It is also in the menu bar panel. The app asks once, after you have sent about twenty emails.</li>
              <li><strong>Feedback, support and feature requests.</strong> The About tab in the app has the contact address. Write to it any time.</li>
            </ul>
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
            <p className={p}>Still stuck? Open the About tab in the app for the contact address.</p>
          </Section>
        </main>
      </Container>

      <SiteFooter />
    </div>
  );
}
