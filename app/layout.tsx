import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import StatCounter from "@/components/statcounter";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Revelio - Waitlist Form",
  description:
    "A waitlist for Revelio, AI-Powered Observability Automation for Radiology.",
  openGraph: {
    title: "Revelio - Waitlist Form",
    description:
      "A waitlist for Revelio, AI-Powered Observability Automation for Radiology.",
    images: [
      {
        url: "https://revelioai.com/opengraph-image.png",
        width: 1280,
        height: 832,
        alt: "Revelio Waitlist",
      },
    ],
    siteName: "Revelio Waitlist",
    url: "https://revelioai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revelio - Waitlist Form",
    description:
      "A waitlist for Revelio, AI-Powered Observability Automation for Radiology.",
    images: ["https://revelioai.com/twitter-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: [
      {
        url: "/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
        <StatCounter />
      </body>
    </html>
  );
}
