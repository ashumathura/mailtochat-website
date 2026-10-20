import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Check, Cross, Icon, icons } from "@/components/icons";
import { Container, Kbd, Pill, SectionHead } from "@/components/ui";
import { DownloadLink } from "@/components/DownloadLink";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

type IconName = keyof typeof icons;

const highlights: { icon: IconName; title: string; body: string }[] = [
  { icon: "inbox", title: "Unlimited mailboxes", body: "Every account in Apple Mail works. No limits, no per-mailbox setup." },
  { icon: "lock", title: "Private by design", body: "Your emails never go to us. They travel from Apple Mail to Claude Desktop on your Mac." },
  { icon: "bolt", title: "Work smarter, not harder", body: "One shortcut replaces the copying, switching, finding and retyping." },
];

const problems: { icon: IconName; title: string; body: string }[] = [
  { icon: "copy", title: "Copy, switch, paste", body: "Select the text, open Claude, find the window, paste, and hope the attachments made it across." },
  { icon: "search", title: "Which chat was it?", body: "You keep a chat or project per client, team or topic. Finding the right one takes longer than the reply." },
  { icon: "layers", title: "The sidebar overflows", body: "Skip the hunt and you open a new chat every time: hundreds of one-off chats, none with the context Claude needs." },
  { icon: "repeat", title: "The same instruction, again", body: "Draft a reply. Summarise. List next steps. You retype it for every single email." },
];

const withoutMemory = [
  "Claude knows nothing about the client or the history",
  "You explain your tone and preferences again and again",
  "Earlier drafts, files and artifacts are lost in other chats",
  "Generic replies, and a sidebar full of one-off chats",
];

const withMemory: [string, string][] = [
  ["Memory and context", " build up with every email"],
  ["Train it once", " on your tone, then keep refining it in the same place"],
  ["Files and artifacts", " stay with the chat or project they belong to"],
  ["Sharper replies", " that sound like you and know the history"],
];

const routeFeatures: [string, string][] = [
  ["From or To.", "Route mail you receive by its sender, and mail you send by its recipient."],
  ["One address or a whole domain.", "A domain covers you and every colleague there, subdomains too."],
  ["Your choice of destination.", "An existing chat, a new chat in a project, a fresh chat, or incognito."],
  ["Standing instructions.", "Add a line to a route, such as “Always reply formally, in Dutch”, and it travels with every email."],
  ["Clear rules.", "A full address beats a domain, drag to reorder, and Test your routes shows which rule applies and why."],
];

const promptFeatures: [string, string][] = [
  ["Anything Claude can do.", "Draft a reply, summarise, research, fill a spreadsheet, open a ticket from your template, run a skill."],
  ["Prompt first, email below.", "Your prompt sits above the email, followed by the route’s standing instructions."],
  ["Send now or review first.", "Turn auto-send on for instant results, or off to read the prompt before you press send."],
  ["The whole email comes along.", "From, To, Cc, date, subject, body and every attachment."],
];

const actions: [string, string][] = [
  ["Draft a Reply", "⌥⌘R"],
  ["Summary & Next Steps", "⌥⌘S"],
  ["Deep Dive & Research", "⌥⌘D"],
  ["Your custom action 1", "⌥⌘1"],
  ["Your custom action 2", "⌥⌘2"],
  ["Paste Only", "⌥⌘C"],
];

const useCases: { title: string; body: string; label: string; text: string }[] = [
  { title: "Answer one client in their own style", body: "Route the client’s domain to their project, add a standing instruction, and every reply uses what Claude already knows about them.", label: "Standing instruction", text: "“Always reply formally, in Dutch.” Then use Draft a Reply." },
  { title: "Catch up on a long thread", body: "Turn a wall of replies into what matters and what you need to do next.", label: "Prompt", text: "“Summarise this email and list my next actions with owners and dates.”" },
  { title: "Research before you reply", body: "Get the background on a sender, a company or a topic before you commit to an answer.", label: "Prompt", text: "“Research the company and topic in this email and give me the context I need before replying.”" },
  { title: "Log an enquiry", body: "Send enquiries to a leads chat and have Claude pull out the fields for your spreadsheet.", label: "Custom action", text: "“Extract name, company, request and urgency and add them as a row in the leads spreadsheet.”" },
  { title: "Open a support ticket", body: "Route your support mailbox to one chat and turn emails into tickets in your template. Claude does the work with whatever it can reach.", label: "Custom action", text: "“Create a support ticket in our tracker from this email, using our ticket template.”" },
  { title: "Run a skill on an attachment", body: "Invoices, contracts and reports arrive as attachments. Send them straight to the skill that checks them.", label: "Prompt", text: "“Run the invoice-check skill on the attached PDF and report any mismatches.”" },
];

const trust: { icon: IconName; title: string; body: string }[] = [
  { icon: "lock", title: "Private by design", body: "MailtoChat never sends your emails, attachments or prompts to us or to any server. They go from Apple Mail to Claude Desktop on your Mac and nowhere else. Once in Claude, they are handled under Claude’s own terms, as if you had pasted them yourself." },
  { icon: "toggle", title: "You stay in control", body: "Nothing watches your inbox and nothing runs when mail arrives. You select an email and you trigger the action. Nothing leaves your Mac unless you press the shortcut." },
  { icon: "inbox", title: "Unlimited mailboxes", body: "Work, side projects, shared inboxes and personal accounts. If it is in Apple Mail, it works, with no limit and no per-mailbox setup." },
  { icon: "clock", title: "A log that stays on your Mac", body: "A searchable activity log shows what you sent and where. Click a subject to reopen the email, or a route to reopen its chat. Clear it, or switch it off, any time." },
  { icon: "bolt", title: "Light on your Mac", body: "A small menu bar app with no Dock icon and no browser extension. It starts quietly and stays out of your way." },
  { icon: "tag", title: "Free during launch", body: "Use all of it, free, while we launch. No trial clock and no card to hand over." },
];

const requirements: [string, string, string][] = [
  ["Claude", "Claude Desktop, installed", "Keep it on its Chat view when you send an email, not the Code view."],
  ["Mail", "Apple Mail", "Any account you have added to Mail."],
  ["Mac", "macOS 13 or later", "On a Mac with Apple Silicon."],
  ["Permissions", "Two, when macOS asks", "Automation for Mail, to read the selected email. Accessibility, to paste into Claude."],
];

const faqs: [string, string][] = [
  ["What is MailtoChat?", "MailtoChat is a small Mac menu bar app that sends mail to Claude. Select an email in Apple Mail, press a shortcut, and the email and its attachments are pasted into the right chat or project in Claude Desktop, with your prompt added."],
  ["How do I send an email from Apple Mail to Claude?", "Install MailtoChat, select an email in Apple Mail and press an action shortcut such as ⌥⌘R to draft a reply. MailtoChat opens the matching chat or project in Claude Desktop, pastes the email and its attachments, and runs your prompt."],
  ["Does MailtoChat send my emails to you?", "No. Your emails, attachments and prompts go from Apple Mail into Claude Desktop on your Mac and are never sent to us. The app only contacts a server to check for updates and your license, plus optional usage analytics that you choose to share."],
  ["Does it work with Outlook, Gmail or Claude on the web?", "Not yet. MailtoChat works with Apple Mail and the Claude desktop app only. If your Gmail or Outlook accounts are added to Apple Mail, they work."],
  ["What if no route matches an email?", "A window asks where it should go: an existing chat, a new chat in a project, a new chat, or an incognito chat. Save the choice as a new route, or use it just once. Prefer not to be asked? One setting always starts a new chat instead."],
  ["Does it send to Claude automatically?", "You decide. With auto-send on, actions that add a prompt are submitted right after pasting. With it off, you read it first and press send. Paste Only never submits."],
  ["Why does Claude Desktop need to be on Chat?", "MailtoChat finds your chat or project in the Chat sidebar. If Claude Desktop is showing the Code view, it cannot find the chat and shows an error. Switch to Chat and send again."],
  ["Is MailtoChat safe to install?", "MailtoChat is signed with an Apple Developer ID and notarized by Apple, so macOS can verify who made it and that Apple has scanned it for malicious content before it opens. It is a small menu bar app, and your emails never go to us."],
  ["How much does it cost?", "MailtoChat is free during the launch period."],
];

const card = "flex min-w-0 flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6";
const iconTile = "flex size-11 items-center justify-center rounded-xl bg-sky text-brand";
const eyebrow = "text-sm font-semibold uppercase tracking-[0.06em] text-brand";
const mockCard = "rounded-[18px] border border-sky-200 bg-white p-5.5 shadow-[0_14px_34px_rgba(13,71,161,0.14)]";
const selectRow = "flex justify-between gap-3 rounded-[9px] border border-slate-300 px-3 py-2.5 text-sm";

function Segmented({ options, active }: { options: [string, string]; active: 0 | 1 }) {
  return (
    <div className="flex overflow-hidden rounded-[9px] border border-slate-300 text-sm font-medium">
      {options.map((o, i) => (
        <div key={o} className={`flex-1 px-2 py-2.25 text-center ${i === active ? "bg-brand text-white" : "text-slate-700"}`}>
          {o}
        </div>
      ))}
    </div>
  );
}

function Bullets({ items }: { items: [string, string][] }) {
  return (
    <ul className="flex flex-col gap-3 text-base leading-normal text-slate-800">
      {items.map(([b, t]) => (
        <li key={b} className="flex gap-2.5">
          <span className="text-brand"><Check /></span>
          <span><strong>{b}</strong> {t}</span>
        </li>
      ))}
    </ul>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: SITE_NAME,
      alternateName: "Mail to Claude",
      description: SITE_DESCRIPTION,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/logo.png`,
      applicationCategory: "ProductivityApplication",
      operatingSystem: "macOS 13 or later (Apple Silicon)",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader current="home" />

      {/* HERO */}
      <section className="bg-brand text-white">
        <Container className="flex flex-wrap items-center gap-14 pb-22 pt-20">
          <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-6">
            <div className="flex flex-wrap gap-2.5 self-start">
              <Pill>For Claude Desktop on Mac</Pill>
              <Pill tone="green">Free during launch</Pill>
            </div>
            <h1 className="text-[clamp(38px,5vw,62px)] leading-[1.05]">
              Stop copy-pasting emails into the wrong Claude chat.
            </h1>
            <p className="max-w-140 text-xl leading-relaxed text-sky">
              Mail to Claude in one shortcut. Select an email in Apple Mail, press a shortcut, and MailtoChat sends it, attachments included, to the right chat or project in Claude Desktop with your prompt already running.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <DownloadLink location="home_hero" className="rounded-xl bg-white px-6.5 py-3.75 text-[17px] font-semibold text-brand no-underline hover:bg-sky hover:text-brand-dark">
                Download for Mac
              </DownloadLink>
              <a href="#how" className="px-2 py-3.75 text-[17px] font-semibold text-white underline underline-offset-4 hover:text-white">
                See how it works
              </a>
            </div>
            <p className="flex items-center gap-2 text-[15px] font-medium text-sky">
              <Icon size={20} stroke={2}>{icons.shield}</Icon>
              Signed and notarized by Apple
            </p>
            <div className="max-w-140 rounded-lg border-l-4 border-sun bg-sun/15 px-4 py-3">
              <p className="text-base leading-normal text-white">
                <strong className="text-sun-light">Works with Claude Desktop and Apple Mail only, for now.</strong>{" "}
                Needs a Mac with Apple Silicon, macOS 13 or later.
              </p>
            </div>
          </div>

          <div
            className="min-w-0 flex-[1_1_400px]"
            role="img"
            aria-label="Illustration: an email selected in Apple Mail is sent with one shortcut to the Acme project in Claude Desktop, where a drafted reply appears."
          >
            <div className="flex flex-col gap-3.5">
              <div className="flex flex-col gap-1.5 rounded-2xl bg-white p-4 text-slate-900 shadow-[0_18px_40px_rgba(2,20,60,0.3)]">
                <p className="px-1 pb-1 text-xs font-semibold uppercase tracking-[0.06em] text-slate-600">Apple Mail</p>
                <div className="rounded-[10px] px-3 py-2.5 text-sm text-slate-600">Studio Team · Weekly digest</div>
                <div className="flex flex-col gap-1 rounded-[10px] bg-sky p-3">
                  <p className="text-[15px] font-semibold">Maya Jensen · Acme</p>
                  <p className="text-sm text-slate-800">Re: Q4 proposal, updated numbers</p>
                  <p className="flex items-center gap-1.5 text-[13px] text-slate-700">
                    <Icon size={15} stroke={2}>{icons.paperclip}</Icon>proposal.pdf
                  </p>
                </div>
                <div className="rounded-[10px] px-3 py-2.5 text-sm text-slate-600">Jonas Vermeer · Invoice 2026-114</div>
              </div>

              <div className="flex items-center justify-center gap-2.5 py-0.5 text-[15px] font-semibold text-white">
                <Kbd>⌥</Kbd><Kbd>⌘</Kbd><Kbd>R</Kbd><span>Draft a Reply</span>
                <Icon size={22} stroke={2}>{icons.arrowDown}</Icon>
              </div>

              <div className="flex flex-col gap-2.5 rounded-2xl bg-white p-4 text-slate-900 shadow-[0_18px_40px_rgba(2,20,60,0.3)]">
                <p className="px-1 text-xs font-semibold uppercase tracking-[0.06em] text-slate-600">Claude Desktop · Project: Acme</p>
                <div className="rounded-xl bg-slate-100 px-3.5 py-3 text-sm leading-normal text-slate-800">
                  Below is an email I received. Using everything you know about this client, draft a reply I can send…
                </div>
                <div className="px-1 pb-0.5 pt-1 text-sm leading-relaxed">
                  Hi Maya, thanks for the updated numbers. I have gone through the proposal and the Q4 scope looks right. Can we confirm it on Friday?
                </div>
              </div>
            </div>
            <p className="mt-3.5 text-center text-[13px] text-sky-200">Illustration with example content</p>
          </div>
        </Container>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-b border-sun-200 bg-sun-50">
        <Container className="flex flex-wrap gap-7 py-9">
          {highlights.map((h) => (
            <div key={h.title} className="flex min-w-0 flex-[1_1_300px] items-start gap-4">
              <div className="flex size-12 flex-none items-center justify-center rounded-[14px] bg-sun text-sun-ink">
                <Icon size={26} stroke={2}>{icons[h.icon]}</Icon>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl leading-tight">{h.title}</h3>
                <p className="text-[15px] leading-normal text-zinc-700">{h.body}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* PROBLEM */}
      <section className="bg-slate-50">
        <Container className="flex flex-col gap-10 py-22">
          <SectionHead title="Every email you bring to Claude starts with the same chores.">
            If you use Claude for email, you already know the routine. It adds up fast, especially across several mailboxes.
          </SectionHead>
          <div className="flex flex-wrap gap-5">
            {problems.map((p) => (
              <div key={p.title} className={`${card} flex-[1_1_240px]`}>
                <div className={iconTile}><Icon>{icons[p.icon]}</Icon></div>
                <h3 className="text-xl leading-tight">{p.title}</h3>
                <p className="text-base leading-snug text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="font-display text-2xl font-bold tracking-tight text-brand">MailtoChat removes all four.</p>
        </Container>
      </section>

      {/* MEMORY USP */}
      <section className="bg-white">
        <Container className="flex flex-col gap-10 pb-6 pt-22">
          <div className="flex max-w-195 flex-col gap-3.5">
            <p className="inline-flex self-start rounded-full bg-sun px-3.5 py-1.75 text-sm font-bold text-sun-ink">Better replies</p>
            <h2 className="text-[clamp(30px,3.6vw,44px)] leading-[1.1]">A chat that remembers makes a better reply.</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Open a new chat for every email and Claude starts from zero every time. Keep each client, team or topic in one chat or project and Claude builds up what it needs: how you write, what was decided, which files matter. MailtoChat makes that the easy way to work.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-4 rounded-[18px] border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-[22px] leading-tight text-slate-700">A new chat every time</h3>
              <ul className="flex flex-col gap-3 text-base leading-normal text-slate-600">
                {withoutMemory.map((t) => (
                  <li key={t} className="flex gap-2.5"><Cross /><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-4 rounded-[18px] border-2 border-sun bg-sun-50 p-7">
              <h3 className="text-[22px] leading-tight">One chat per client or topic, with MailtoChat</h3>
              <ul className="flex flex-col gap-3 text-base leading-normal text-slate-800">
                {withMemory.map(([b, t]) => (
                  <li key={b} className="flex gap-2.5">
                    <span className="text-sun-deep"><Check /></span>
                    <span><strong>{b}</strong>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="max-w-195 text-[17px] leading-relaxed text-slate-700">
            Finding the right chat is one problem. Getting better answers from it is another. Chat routes solve both: the email always goes to the chat that already knows the story.
          </p>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="scroll-mt-4 bg-white">
        <Container className="flex flex-col gap-10 py-22">
          <SectionHead title="One shortcut. The right chat. The right action.">
            MailtoChat lives in your menu bar and sends mail to Claude for you.
          </SectionHead>
          <div className="flex flex-wrap gap-5">
            {[
              ["Select an email", <>Click any message in Apple Mail, from any of your mailboxes. Unlimited mailboxes, no per-account setup.</>],
              ["Pick an action", <>Press a shortcut such as <span className="mx-1 inline-flex gap-1 align-middle"><Kbd>⌥</Kbd><Kbd>⌘</Kbd><Kbd>R</Kbd></span> or choose one from the menu bar icon. Each action carries its own prompt.</>],
              ["Claude takes it from there", <>The email, its details and every attachment land in the chat or project your route points to, and your prompt runs.</>],
            ].map(([title, body], i) => (
              <div key={i} className="flex min-w-0 flex-[1_1_280px] flex-col gap-3.5 py-1">
                <div className="flex size-11 items-center justify-center rounded-full bg-brand font-display text-xl font-bold text-white">{i + 1}</div>
                <h3 className="text-[22px] leading-tight">{title}</h3>
                <p className="text-base leading-relaxed text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section id="features" className="scroll-mt-4 bg-sky">
        <Container className="flex flex-col gap-18 py-22">
          <SectionHead title="Simple to start. Powerful once you configure it." max="max-w-190">
            Set up your routes and prompts once. After that, every email lands where it belongs and gets the instruction you want.
          </SectionHead>

          {/* Routes */}
          <div className="flex flex-wrap items-center gap-14">
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4.5">
              <p className={eyebrow}>Chat routes</p>
              <h3 className="text-[clamp(26px,3vw,34px)] leading-[1.15]">Memory, context and a clean sidebar.</h3>
              <p className="text-[17px] leading-relaxed text-slate-700">
                Link a sender, a recipient or a whole domain to a specific Claude chat or project. Replies draw on the memory, files and artifacts already in that place, instead of starting from zero.
              </p>
              <div className="text-brand"><Bullets items={routeFeatures} /></div>
            </div>
            <div
              className="min-w-0 flex-[1_1_400px]"
              role="img"
              aria-label="Illustration of the Add Route window: when an email is received from anyone at acme.com, put it in the Acme project, with the standing instruction Always reply formally, in Dutch."
            >
              <div className={`${mockCard} flex flex-col gap-4`}>
                <div className="flex flex-col gap-0.5">
                  <p className="font-display text-xl font-bold">Add Route</p>
                  <p className="text-sm text-slate-600">Choose which emails this applies to, and where Claude should receive them.</p>
                </div>
                <p className="text-sm font-semibold">When an email is...</p>
                <div className="flex flex-col gap-2">
                  <Segmented options={["Sent to (To)", "Received from (From)"]} active={1} />
                  <Segmented options={["Anyone at a domain", "One email address"]} active={0} />
                  <div className={selectRow}><span className="text-slate-600">Domain</span><span className="font-semibold">acme.com</span></div>
                </div>
                <p className="text-sm font-semibold">...put it in Claude</p>
                <div className={selectRow}><span className="text-slate-600">Send it to</span><span className="font-semibold">New chat in project: Acme</span></div>
                <p className="text-sm font-semibold">Standing instructions (optional)</p>
                <div className="rounded-[9px] border border-slate-300 px-3 py-2.5 text-sm leading-normal">Always reply formally, in Dutch.</div>
                <div className="rounded-[10px] bg-sky px-3.5 py-3 text-sm leading-normal text-brand-dark">
                  <strong>Result:</strong> Emails received from anyone at acme.com go to: New chat in project: Acme
                </div>
              </div>
            </div>
          </div>

          {/* Prompts */}
          <div className="flex flex-wrap items-center gap-14">
            <div
              className="min-w-0 flex-[1_1_400px]"
              role="img"
              aria-label="Illustration of the six action slots: Draft a Reply, Summary and Next Steps, Deep Dive and Research, two custom actions and Paste Only, each with its own shortcut."
            >
              <div className={`${mockCard} flex flex-col gap-3.5`}>
                <div className="flex flex-col">
                  {actions.map(([name, key], i) => (
                    <div key={name} className={`flex items-center justify-between gap-3 rounded-[10px] px-3 py-2.75 text-[15px] ${i === 0 ? "bg-sky font-semibold" : ""}`}>
                      <span>{name}</span><Kbd>{key}</Kbd>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2 border-t border-slate-200 pt-3.5">
                  <p className="text-sm font-semibold">After pasting: <span className="text-brand">Add a prompt to the email</span></p>
                  <div className="rounded-[10px] bg-slate-100 px-3.5 py-3 text-sm leading-normal text-slate-800">
                    Below is an email I received. Using everything you know from earlier in this conversation, draft a reply I can send. Match the tone of the thread and answer every question.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4.5">
              <p className={eyebrow}>Prompts</p>
              <h3 className="text-[clamp(26px,3vw,34px)] leading-[1.15]">Tell Claude what to do, once.</h3>
              <p className="text-[17px] leading-relaxed text-slate-700">
                Six action slots, each with its own name, shortcut and prompt. Start with three presets, write two of your own, and keep Paste Only for when you just want the email in the chat.
              </p>
              <div className="text-brand"><Bullets items={promptFeatures} /></div>
            </div>
          </div>
        </Container>
      </section>

      {/* USE CASES */}
      <section id="use-cases" className="scroll-mt-4 bg-white">
        <Container className="flex flex-col gap-10 py-22">
          <SectionHead title="What you can do with it.">
            If Claude can do it with an email, one shortcut can start it. A few ideas to adapt.
          </SectionHead>
          <div className="flex flex-wrap gap-5">
            {useCases.map((u) => (
              <div key={u.title} className={`${card} flex-[1_1_320px] gap-3.5`}>
                <h3 className="text-[21px] leading-tight">{u.title}</h3>
                <p className="text-base leading-snug text-slate-600">{u.body}</p>
                <div className="rounded-[10px] bg-slate-100 px-3.5 py-3 text-sm leading-normal text-slate-800">
                  <span className="font-semibold text-brand">{u.label}</span> {u.text}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TRUST */}
      <section className="bg-slate-50">
        <Container className="flex flex-col gap-10 py-22">
          <SectionHead title="Built to be trusted with your inbox.">
            Email is sensitive. MailtoChat is small on purpose, and clear about what it does.
          </SectionHead>
          <div className="flex flex-wrap gap-5">
            {trust.map((t) => (
              <div key={t.title} className={`${card} flex-[1_1_320px]`}>
                <div className={iconTile}><Icon>{icons[t.icon]}</Icon></div>
                <h3 className="text-xl leading-tight">{t.title}</h3>
                <p className="text-base leading-snug text-slate-600">{t.body}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-5 rounded-2xl border-2 border-sun bg-sun-50 p-6">
            <div className="flex size-12 flex-none items-center justify-center rounded-[14px] bg-sun text-sun-ink">
              <Icon size={26} stroke={2}>{icons.shield}</Icon>
            </div>
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-1">
              <h3 className="text-xl leading-tight">Signed and notarized by Apple</h3>
              <p className="text-base leading-snug text-slate-700">
                MailtoChat is signed with an Apple Developer ID and notarized by Apple, so macOS can verify who made it and that Apple has scanned it for malicious content before it opens.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* REQUIREMENTS */}
      <section className="bg-white">
        <Container className="flex flex-col gap-9 py-22">
          <SectionHead title="Built for Claude Desktop on Mac. For now." max="max-w-190">
            MailtoChat works with the Claude desktop app and Apple Mail. Other mail clients and Claude on the web are not supported yet.
          </SectionHead>
          <div className="flex flex-wrap gap-4">
            {requirements.map(([label, title, body]) => (
              <div key={label} className="flex min-w-0 flex-[1_1_220px] flex-col gap-1.5 rounded-[14px] border border-slate-200 bg-slate-50 p-5">
                <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-brand">{label}</p>
                <p className="text-[17px] font-semibold leading-snug">{title}</p>
                <p className="text-[15px] leading-normal text-slate-600">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-base leading-snug text-slate-600">
            <strong className="text-slate-900">Not supported yet:</strong> Outlook, Gmail in a browser, Claude on the web and Intel Macs.
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-4 bg-slate-50">
        <Container narrow className="flex flex-col gap-8 py-22">
          <h2 className="text-[clamp(30px,3.6vw,44px)] leading-[1.1]">Questions, answered.</h2>
          <div className="flex flex-col gap-3">
            {faqs.map(([q, a]) => (
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
        </Container>
      </section>

      {/* FINAL CTA */}
      <section id="download" className="scroll-mt-4 bg-brand text-white">
        <Container narrow className="flex flex-col items-center gap-5.5 py-22 text-center">
          <h2 className="text-[clamp(32px,4vw,50px)] leading-[1.08]">Give every email a home in Claude.</h2>
          <p className="max-w-150 text-xl leading-relaxed text-sky">
            Set up your routes once and send your next email to the right chat in a single shortcut.
          </p>
          <DownloadLink location="home_final_cta" className="rounded-xl bg-white px-7.5 py-4 text-lg font-semibold text-brand no-underline hover:bg-sky hover:text-brand-dark">
            Download MailtoChat for Mac
          </DownloadLink>
          <p className="text-[15px] leading-normal text-sky-200">
            Free during launch. Signed and notarized by Apple. For Claude Desktop and Apple Mail on a Mac with Apple Silicon, macOS 13 or later.
          </p>
        </Container>
      </section>

      <SiteFooter />
    </div>
  );
}
