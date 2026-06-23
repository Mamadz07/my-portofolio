import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Muhammad Ilham | Full Stack Developer",
  description:
    "Professional Full Stack Developer Portfolio. Building modern, scalable, and beautiful digital experiences.",

  keywords: [
    "Muhammad Ilham",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Muhammad Ilham",
    },
  ],

  creator: "Muhammad Ilham",

  openGraph: {
    title: "Muhammad Ilham | Full Stack Developer",
    description:
      "Professional Portfolio Website of Muhammad Ilham",
    url: "https://your-domain.com",
    siteName: "Muhammad Ilham Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ilham | Full Stack Developer",
    description:
      "Professional Portfolio Website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable}
          ${geist.variable}
          bg-background
          text-white
          antialiased
          overflow-x-hidden
        `}
      >
        {children}
      </body>
    </html>
  );
}