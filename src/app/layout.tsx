import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Ulises Apaza | Fullstack Developer";
const siteDescription =
  "Fullstack Developer based on Argentina. Just enter";

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: {
    default: siteTitle,
    template: "%s | Ulises Apaza",
  },
  description: siteDescription,
  keywords: [
    "Ulises Apaza",
    "portfolio",
    "fullstack developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Ulises Apaza" }],
  creator: "Ulises Apaza",
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "Ulises Apaza",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Readonly<Props>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{props.children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
