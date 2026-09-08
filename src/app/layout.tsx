import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Archivo, Geist, Geist_Mono, Space_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const description =
  "Portfolio of Todd Wyatt, an applied AI and systems engineer in Kalamazoo, Michigan. LLM systems, edge ML, and full-stack TypeScript, all running in production. Open to applied AI and forward deployed engineering roles, on contract through ToddTech LLC or full-time. U.S. Navy veteran. CompTIA Security+ certified.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.toddtech.llc"),
  title: {
    default: "Todd Wyatt, Applied AI and Systems Engineer | ToddTech LLC",
    template: "%s | ToddTech LLC",
  },
  description,
  openGraph: {
    siteName: "ToddTech LLC",
    locale: "en_US",
    type: "website",
    title: "Todd Wyatt, Applied AI and Systems Engineer",
    description,
    images: [
      {
        url: "/images/aviary/0-hero.png",
        width: 1507,
        height: 973,
        alt: "The Aviary dashboard, one of Todd Wyatt's production AI systems",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} ${archivo.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Analytics />
    </html>
  );
}
