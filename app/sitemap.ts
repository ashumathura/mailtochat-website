import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/mail-to-claude/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/compare/copy-paste/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/compare/mailtoclaude/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/manual/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
