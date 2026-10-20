import type { ReactNode } from "react";
import { Kbd } from "@/components/ui";

/* Illustrations of the app's windows, built in HTML with example content. They follow the real
   wording of the app so the manual and the home page can show what a screen looks like. */

export const mockCard = "rounded-[18px] border border-sky-200 bg-white p-5.5 shadow-[0_14px_34px_rgba(13,71,161,0.14)]";
export const selectRow = "flex justify-between gap-3 rounded-[9px] border border-slate-300 px-3 py-2.5 text-sm";

export function Segmented({ options, active }: { options: [string, string]; active: 0 | 1 }) {
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

/** A mock window with a short description for screen readers and the standard caption underneath. */
export function Figure({ label, caption, children, wide = false }: { label: string; caption?: string; children: ReactNode; wide?: boolean }) {
  return (
    <figure className={`m-0 flex min-w-0 flex-[1_1_300px] flex-col gap-2.5 ${wide ? "" : "max-w-110"}`}>
      <div role="img" aria-label={label}>{children}</div>
      <figcaption className="text-[13px] leading-snug text-slate-600">
        {caption ? `${caption} ` : ""}Illustration with example content.
      </figcaption>
    </figure>
  );
}

const sectionLabel = "text-sm font-semibold";
const chip = "rounded-full bg-slate-100 px-1.5 py-px text-[11px] font-semibold text-slate-700";
const button = "rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-[13px] font-medium text-slate-800";
const buttonPrimary = "rounded-lg bg-brand px-3 py-1.5 text-[13px] font-semibold text-white";

/** The Add Route window. */
export function AddRouteMock() {
  return (
    <div className={`${mockCard} flex flex-col gap-4`}>
      <div className="flex flex-col gap-0.5">
        <p className="font-display text-xl font-bold">Add Route</p>
        <p className="text-sm text-slate-600">Choose which emails this applies to, and where Claude should receive them.</p>
      </div>
      <p className={sectionLabel}>When an email is...</p>
      <div className="flex flex-col gap-2">
        <Segmented options={["Sent to (To)", "Received from (From)"]} active={1} />
        <Segmented options={["Anyone at a domain", "One email address"]} active={0} />
        <div className={selectRow}><span className="text-slate-600">Domain</span><span className="font-semibold">acme.com</span></div>
      </div>
      <p className={sectionLabel}>...put it in Claude</p>
      <div className={selectRow}><span className="text-slate-600">Send it to</span><span className="font-semibold">New chat in project: Acme</span></div>
      <p className={sectionLabel}>Route prompt (optional)</p>
      <div className="rounded-[9px] border border-slate-300 px-3 py-2.5 text-sm leading-normal">Always reply formally, in Dutch.</div>
      <div className="rounded-[10px] bg-sky px-3.5 py-3 text-sm leading-normal text-brand-dark">
        <strong>Result:</strong> Emails received from anyone at acme.com go to: New chat in project: Acme
      </div>
    </div>
  );
}

/** The Routes tab: the list of routes and the route tester. */
export function RoutesListMock() {
  const rows: { name: string; field: string; kind: string; dest: string; prompt?: string }[] = [
    { name: "maya@acme.com", field: "From", kind: "Address", dest: "Existing chat: Maya at Acme" },
    { name: "acme.com", field: "From", kind: "Domain", dest: "New chat in project: Acme", prompt: "Always reply formally, in Dutch." },
    { name: "acme.com", field: "To", kind: "Domain", dest: "New chat in project: Acme" },
    { name: "northwind.com", field: "From", kind: "Domain", dest: "New chat in project: Northwind" },
  ];
  return (
    <div className={`${mockCard} flex flex-col gap-3.5`}>
      <div className="flex flex-col overflow-hidden rounded-[10px] border border-slate-200">
        {rows.map((r, i) => (
          <div key={r.name + r.field} className={`flex flex-col gap-0.5 px-3.5 py-2.5 ${i % 2 === 0 ? "bg-slate-50" : "bg-white"} ${i === 0 ? "outline outline-2 -outline-offset-2 outline-brand" : ""}`}>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[15px] font-medium">{r.name}</span>
              <span className={chip}>{r.field}</span>
              <span className={chip}>{r.kind}</span>
            </div>
            <p className="text-sm text-slate-600">{r.dest}</p>
            {r.prompt && <p className="text-[13px] text-slate-600">“ {r.prompt}</p>}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-3 text-[13px] text-slate-600">
        <span className="flex gap-1.5"><span className={button}>+</span><span className={button}>−</span></span>
        <span>Drag to reorder. Higher wins.</span>
        <span className={button}>Edit…</span>
      </div>
      <div className="flex flex-col gap-2 border-t border-slate-200 pt-3">
        <p className={sectionLabel}>Test your routes</p>
        <div className="flex gap-2 text-sm">
          <div className={`${selectRow} flex-1`}><span className="text-slate-500">From</span><span>maya@acme.com</span></div>
          <div className={`${selectRow} flex-1`}><span className="text-slate-500">To</span><span>you@yourcompany.com</span></div>
        </div>
        <p className="text-sm leading-normal text-slate-700">
          <strong>From maya@acme.com</strong> (address) matches maya@acme.com, so it goes to: <strong>Existing chat: Maya at Acme</strong>.
        </p>
      </div>
    </div>
  );
}

function MenuList({ children }: { children: ReactNode }) {
  return <div className="flex flex-col rounded-[12px] border border-slate-200 bg-white py-1.5 text-[15px] shadow-[0_10px_26px_rgba(15,23,42,0.14)]">{children}</div>;
}
const menuHeading = "px-4 pb-1 pt-2 text-xs font-semibold text-slate-500";
const menuRule = <div className="my-1.5 border-t border-slate-200" />;

/** The chat picker in the route window, open, with the Refresh button and its status line. */
export function ChatPickerMock() {
  return (
    <div className={`${mockCard} flex flex-col gap-3`}>
      <div className={selectRow}><span className="text-slate-600">Chat</span><span className="font-semibold">Choose a chat…</span></div>
      <MenuList>
        <div className="px-4 py-1.5">✓ Choose a chat…</div>
        {menuRule}
        <p className={menuHeading}>In project: Acme</p>
        <div className="px-4 py-1.5">Acme Q4 proposal</div>
        <div className="px-4 py-1.5">Acme contract questions</div>
        {menuRule}
        <p className={menuHeading}>In project: Northwind</p>
        <div className="px-4 py-1.5">Northwind onboarding plan</div>
        {menuRule}
        <p className={menuHeading}>Recent chats</p>
        <div className="px-4 py-1.5">Offsite planning</div>
        <div className="px-4 py-1.5">Invoice question from Jonas</div>
      </MenuList>
      <div className="flex flex-wrap items-center gap-2">
        <span className={`${button} text-[12px]`}>↻ Refresh Chat List</span>
        <span className="text-xs text-slate-600">Updated 14:32:05: 38 chats in 4 projects and recents</span>
      </div>
    </div>
  );
}

/** The project picker in the route window, open, with its own Refresh button. */
export function ProjectPickerMock() {
  return (
    <div className={`${mockCard} flex flex-col gap-3`}>
      <div className={selectRow}><span className="text-slate-600">Send it to</span><span className="font-semibold">New chat in a project</span></div>
      <div className={selectRow}><span className="text-slate-600">Project</span><span className="font-semibold">Choose a project…</span></div>
      <MenuList>
        <div className="px-4 py-1.5">✓ Choose a project…</div>
        <div className="px-4 py-1.5">Acme</div>
        <div className="px-4 py-1.5">Northwind</div>
        <div className="px-4 py-1.5">Quarterly review</div>
        {menuRule}
        <div className="px-4 py-1.5">Other (type its name)…</div>
      </MenuList>
      <div className="flex flex-wrap items-center gap-2">
        <span className={`${button} text-[12px]`}>↻ Refresh Project List</span>
        <span className="text-xs text-slate-600">Updated 14:32:05: 3 projects</span>
      </div>
    </div>
  );
}

/** The window that opens when an email matches no route. */
export function NoRouteMock() {
  return (
    <div className={`${mockCard} flex flex-col gap-3.5`}>
      <div className="flex flex-col gap-0.5">
        <p className="font-display text-xl font-bold">No route for this email yet</p>
        <p className="text-sm leading-normal text-slate-600">There’s no Claude destination yet for mail received from maya@acme.com. Choose one and MailtoChat will remember it.</p>
      </div>
      <div className="flex flex-col gap-2">
        <Segmented options={["Sent to (To)", "Received from (From)"]} active={1} />
        <div className={selectRow}><span className="text-slate-600">Domain</span><span className="font-semibold">acme.com</span></div>
        <div className={selectRow}><span className="text-slate-600">Send it to</span><span className="font-semibold">New chat in project: Acme</span></div>
      </div>
      <p className="text-sm leading-normal text-slate-700">☐ Don’t ask again. Always start a new chat when no route matches.</p>
      <div className="flex justify-end gap-2">
        <span className={button}>Cancel</span>
        <span className={button}>Just This Once</span>
        <span className={buttonPrimary}>Save</span>
      </div>
    </div>
  );
}

/** The menu bar panel with the actions and the app's own buttons. */
export function MenuPanelMock() {
  const actions: [string, string, string][] = [
    ["↩", "Draft a Reply", "⌥⌘R"],
    ["✓", "Summary & Next Steps", "⌥⌘S"],
    ["⌕", "Deep Dive & Research", "⌥⌘D"],
    ["✦", "Weekly lead row", "⌥⌘1"],
    ["⎘", "Paste Only", "⌥⌘C"],
  ];
  return (
    <div className="flex max-w-80 flex-col gap-2 rounded-[14px] border border-slate-200 bg-white p-3 shadow-[0_14px_34px_rgba(15,23,42,0.18)]">
      <div className="flex items-center gap-2.5 px-1">
        <span className="flex size-6.5 items-center justify-center rounded-md bg-brand text-xs font-bold text-white">M</span>
        <span className="font-display text-base font-bold">MailtoChat</span>
        <span className="ml-auto text-xs text-slate-500">v0.1.11</span>
      </div>
      <div className="border-t border-slate-200" />
      <p className="px-2 text-xs font-semibold text-slate-500">Send to Claude</p>
      <div className="flex flex-col gap-0.5">
        {actions.map(([glyph, name, key], i) => (
          <div key={name} className={`flex items-center gap-2.5 rounded-[9px] px-1.5 py-1 ${i === 0 ? "bg-sky" : ""}`}>
            <span className="flex size-6.5 items-center justify-center rounded-[7px] bg-sky text-[13px] text-brand">{glyph}</span>
            <span className="text-[15px]">{name}</span>
            <span className="ml-auto"><Kbd>{key}</Kbd></span>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200" />
      <div className="flex items-center gap-1 text-lg text-slate-600">
        <span className="px-2" title="Check for Updates">⟳</span>
        <span className="px-2" title="Settings">⚙</span>
        <span className="px-2 text-brand" title="Support the App">♥</span>
        <span className="ml-auto px-2" title="Quit MailtoChat">⏻</span>
      </div>
    </div>
  );
}

/** The warning shown when several emails are selected in Mail. */
export function SeveralEmailsMock() {
  return (
    <div className="flex max-w-96 flex-col gap-3 rounded-[14px] border border-slate-200 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.18)]">
      <p className="font-display text-lg font-bold">3 emails are selected</p>
      <p className="text-sm leading-normal text-slate-700">
        MailtoChat sends one email at a time, so only the first one will go to Claude:
      </p>
      <p className="text-sm font-medium text-slate-800">“Re: Q4 proposal, updated numbers”</p>
      <p className="text-sm text-slate-700">☐ Don’t warn me again</p>
      <div className="flex justify-end gap-2">
        <span className={buttonPrimary}>Send First Email</span>
        <span className={button}>Cancel</span>
      </div>
    </div>
  );
}
