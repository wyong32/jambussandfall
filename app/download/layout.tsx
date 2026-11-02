import type { Metadata } from "next";
import { canonical, OG_IMAGE, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download Jam Bus:Sandfall - iOS & Android",
  description: "Download Jam Bus:Sandfall for iOS and Android from the official store listings. Route colored buses, match sand, and clear layered pictures.",
  keywords: ["Download Jam Bus:Sandfall", "Jam Bus:Sandfall iOS", "Jam Bus:Sandfall Android", "ant puzzle game download", "color sorting game"],
  authors: [{ name: "Jam Bus:Sandfall Guide Team" }],
  openGraph: {
    type: 'website',
    url: canonical("/download/"),
    siteName: SITE_NAME,
    title: 'Download Jam Bus:Sandfall - iOS & Android',
    description: 'Download Jam Bus:Sandfall and solve bus routing and sand color puzzles.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Download Jam Bus:Sandfall'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download Jam Bus:Sandfall - iOS & Android',
    description: 'Download Jam Bus:Sandfall and solve bus routing and sand color puzzles.',
    images: [OG_IMAGE]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: canonical("/download/")
  }
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
