import type { Metadata } from "next";
import { canonical, OG_IMAGE, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jam Bus:Sandfall Blog - Guides, Tips & Strategy",
  description: "Read Jam Bus:Sandfall strategy articles about bus routes, sand colors, parking capacity, screenshot matching, and level solutions.",
  keywords: ["Jam Bus:Sandfall blog", "Jam Bus:Sandfall guide", "Jam Bus:Sandfall tips", "bus route puzzle", "sandfall walkthrough"],
  authors: [{ name: "Jam Bus:Sandfall Guide Team" }],
  openGraph: {
    type: 'website',
    url: canonical("/blog/"),
    siteName: SITE_NAME,
    title: 'Jam Bus:Sandfall Blog - Guides, Tips & Strategy',
    description: 'Read Jam Bus:Sandfall strategy articles, beginner tips, routing notes, and parking advice.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Jam Bus:Sandfall Blog'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jam Bus:Sandfall Blog - Guides, Tips & Strategy',
    description: 'Read Jam Bus:Sandfall strategy articles, beginner tips, and walkthrough notes.',
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
    canonical: canonical("/blog/")
  }
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
