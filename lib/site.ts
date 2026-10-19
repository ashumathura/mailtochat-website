// Placeholders: replace before launch.
export const SUPPORT_EMAIL = "[SUPPORT EMAIL]";
// Redirects to the newest published DMG in the private Supabase "releases" bucket.
export const DOWNLOAD_URL =
  process.env.NEXT_PUBLIC_DOWNLOAD_URL ??
  "https://yomgyukfzlnjxcvdsivw.supabase.co/functions/v1/download";

export const LEGAL =
  "© 2026 MailtoChat. MailtoChat is an independent app and is not affiliated with or endorsed by Anthropic. Claude is a trademark of Anthropic, PBC. Apple and Mac are trademarks of Apple Inc.";

// Prefix for files in /public when the site is served from a sub-path (GitHub Pages project site).
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const SITE_URL = "https://mailtochat.app";
export const SITE_NAME = "MailtoChat";
export const SITE_TITLE = "Mail to Claude for Mac | Send Apple Mail emails to Claude";
export const SITE_DESCRIPTION =
  "Mail to Claude in one shortcut. MailtoChat sends the selected Apple Mail email, attachments included, to the right chat or project in Claude Desktop with your prompt already running. Free during launch.";
