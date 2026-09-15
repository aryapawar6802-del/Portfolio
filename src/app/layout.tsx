import type { Metadata } from "next";
import { Newsreader, Archivo, Caveat } from "next/font/google";
import { TopNav } from "@/components/TopNav";
import { IntroCurtain } from "@/components/IntroCurtain";
import { site } from "@/content/site";
import "./globals.css";

/* Editorial pairing after sideways.co.in: a serif carrying display and
   long-form prose, a neutral grotesk carrying labels and meta. */
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.subtitle,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${archivo.variable} ${caveat.variable} antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <IntroCurtain />
        <TopNav />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
