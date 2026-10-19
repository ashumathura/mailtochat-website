import { SITE_NAME, SITE_URL } from "@/lib/site";

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function faqSchema(faqs: [string, string][]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function pageSchema({
  path,
  title,
  description,
  crumb,
  faqs,
}: {
  path: string;
  title: string;
  description: string;
  crumb: string;
  faqs?: [string, string][];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${SITE_URL}${path}`, url: `${SITE_URL}${path}`, name: title, description, isPartOf: { "@id": `${SITE_URL}/#app` } },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: crumb, item: `${SITE_URL}${path}` },
        ],
      },
      ...(faqs ? [faqSchema(faqs)] : []),
    ],
  };
}
