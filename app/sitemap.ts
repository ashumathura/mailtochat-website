import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// The date each page's content last changed. Update a page's date when its text changes, so
// crawlers don't see every page as new on every deploy.
const pages: { path: string; modified: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { path: "/", modified: "2026-10-20", changeFrequency: "weekly", priority: 1 },
  { path: "/mail-to-claude/", modified: "2026-10-20", changeFrequency: "monthly", priority: 0.9 },
  { path: "/compare/copy-paste/", modified: "2026-10-20", changeFrequency: "monthly", priority: 0.7 },
  { path: "/compare/mailtoclaude/", modified: "2026-10-20", changeFrequency: "monthly", priority: 0.7 },
  { path: "/manual/", modified: "2026-10-20", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, modified, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(`${modified}T00:00:00Z`),
    changeFrequency,
    priority,
  }));
}
