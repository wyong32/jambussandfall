import type { Metadata } from "next";
import { canonical, OG_IMAGE, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy - JamBusSandfall.org",
  description: "Read the Privacy Policy for JamBusSandfall.org and learn how this guide site handles basic website data.",
  keywords: ["Privacy Policy", "JamBusSandfall.org", "data protection", "privacy"],
  authors: [{ name: "Jam Bus:Sandfall Guide Team" }],
  openGraph: {
    type: 'website',
    url: canonical("/privacy-policy/"),
    siteName: SITE_NAME,
    title: 'Privacy Policy - JamBusSandfall.org',
    description: 'Read the Privacy Policy for JamBusSandfall.org.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'JamBusSandfall.org Privacy Policy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - JamBusSandfall.org',
    description: 'Read the Privacy Policy for JamBusSandfall.org.',
    images: [OG_IMAGE]
  },
  alternates: { canonical: canonical("/privacy-policy/") }
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
