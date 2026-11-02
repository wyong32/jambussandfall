import type { Metadata } from "next";
import { canonical, OG_IMAGE, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find Your Jam Bus:Sandfall Level by Screenshot",
  description: "Upload a Jam Bus:Sandfall board screenshot and compare it with available level guides. Your image stays on your device.",
  keywords: [
    "find Jam Bus:Sandfall level",
    "Jam Bus:Sandfall screenshot search",
    "Jam Bus:Sandfall level finder",
    "Jam Bus:Sandfall board match",
  ],
  alternates: { canonical: canonical("/find-level/") },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: canonical("/find-level/"),
    siteName: SITE_NAME,
    title: "Find Your Jam Bus:Sandfall Level by Screenshot",
    description: "Compare a Jam Bus:Sandfall board screenshot with available level guides. Image matching runs on your device.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Jam Bus:Sandfall screenshot level finder" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Jam Bus:Sandfall Level by Screenshot",
    description: "Compare a Jam Bus:Sandfall screenshot with available guides without uploading the image.",
    images: [OG_IMAGE],
  },
};

export default function FindLevelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
