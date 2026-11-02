import type { Metadata } from "next";
import { canonical, OG_IMAGE, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us - JamBusSandfall.org",
  description: "Contact JamBusSandfall.org with Jam Bus:Sandfall level requests, walkthrough corrections, and site feedback.",
  keywords: ["Contact Jam Bus:Sandfall Guide", "feedback", "support", "level requests"],
  authors: [{ name: "Jam Bus:Sandfall Guide Team" }],
  openGraph: {
    type: 'website',
    url: canonical("/contact-us/"),
    siteName: SITE_NAME,
    title: 'Contact Us - JamBusSandfall.org',
    description: 'Contact JamBusSandfall.org with Jam Bus:Sandfall guide feedback and level requests.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Contact JamBusSandfall.org' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - JamBusSandfall.org',
    description: 'Contact JamBusSandfall.org with Jam Bus:Sandfall guide feedback.',
    images: [OG_IMAGE]
  },
  alternates: { canonical: canonical("/contact-us/") }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
