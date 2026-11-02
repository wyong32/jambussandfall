import type { Metadata } from "next";
import { canonical, OG_IMAGE, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service - JamBusSandfall.org",
  description: "Read the Terms of Service for using JamBusSandfall.org and its Jam Bus:Sandfall walkthrough guides.",
  keywords: ["Terms of Service", "JamBusSandfall.org", "terms and conditions", "legal"],
  authors: [{ name: "Jam Bus:Sandfall Guide Team" }],
  openGraph: {
    type: 'website',
    url: canonical("/terms-of-service/"),
    siteName: SITE_NAME,
    title: 'Terms of Service - JamBusSandfall.org',
    description: 'Read the Terms of Service for JamBusSandfall.org.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'JamBusSandfall.org Terms of Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - JamBusSandfall.org',
    description: 'Read the Terms of Service for JamBusSandfall.org.',
    images: [OG_IMAGE]
  },
  alternates: { canonical: canonical("/terms-of-service/") }
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
