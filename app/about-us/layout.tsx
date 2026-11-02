import type { Metadata } from "next";
import { canonical, OG_IMAGE, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us - JamBusSandfall.org",
  description: "Learn about JamBusSandfall.org, an independent Jam Bus:Sandfall walkthrough and strategy guide site.",
  keywords: ["About Jam Bus:Sandfall Guide", "JamBusSandfall.org", "puzzle game guide", "game walkthrough"],
  authors: [{ name: "Jam Bus:Sandfall Guide Team" }],
  openGraph: {
    type: 'website',
    url: canonical("/about-us/"),
    siteName: SITE_NAME,
    title: 'About Us - JamBusSandfall.org',
    description: 'Learn about JamBusSandfall.org, an independent Jam Bus:Sandfall walkthrough and strategy guide site.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'About JamBusSandfall.org' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - JamBusSandfall.org',
    description: 'Learn about JamBusSandfall.org, an independent Jam Bus:Sandfall guide site.',
    images: [OG_IMAGE]
  },
  alternates: { canonical: canonical("/about-us/") }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
