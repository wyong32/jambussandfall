import type { Metadata } from "next";
import { canonical, gameDescription, OG_IMAGE, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jam Bus:Sandfall Levels Walkthroughs & Solutions",
  description: "Browse Jam Bus:Sandfall level walkthroughs with complete videos, board screenshots, bus route notes, and color-matching puzzle solutions.",
  keywords: ["Jam Bus:Sandfall levels", "Jam Bus:Sandfall walkthrough", "Jam Bus:Sandfall solutions", "bus route puzzle", "sandfall game guide", "color matching"],
  authors: [{ name: "Jam Bus:Sandfall Guide Team" }],
  openGraph: {
    type: 'website',
    url: canonical("/levels/"),
    siteName: SITE_NAME,
    title: 'Jam Bus:Sandfall Levels Walkthroughs & Solutions',
    description: gameDescription,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Jam Bus:Sandfall available level walkthroughs'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jam Bus:Sandfall Levels Walkthroughs & Solutions',
    description: 'Browse Jam Bus:Sandfall level videos, bus routes, board images, and color-matching solutions.',
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
    canonical: canonical("/levels/")
  }
};

export default function LevelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
