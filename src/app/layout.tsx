import type { Metadata } from "next";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Providers } from "./components/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const description =
  "Le Thanh Phat — Software Engineer with 2+ years building full-stack web apps and AI-integrated systems with React, Next.js, NestJS, FastAPI and Docker.";

export const metadata: Metadata = {
  title: "Le Thanh Phat | Software Engineer",
  description,
  keywords: [
    "Le Thanh Phat",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "NestJS",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "AI",
  ],
  authors: [{ name: "Le Thanh Phat" }],
  openGraph: {
    title: "Le Thanh Phat | Software Engineer",
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
