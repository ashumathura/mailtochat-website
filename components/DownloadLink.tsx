"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/analytics";
import { DOWNLOAD_URL } from "@/lib/site";

// Download button that reports a "download_app" event. Mark it as a key event in GA.
export function DownloadLink({
  location,
  className,
  children,
}: {
  location: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={DOWNLOAD_URL}
      className={className}
      onClick={() => track("download_app", { link_location: location, file_name: "MailtoChat.dmg" })}
    >
      {children}
    </a>
  );
}
