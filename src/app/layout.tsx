import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

const kodeMono = localFont({
  src: "./fonts/KodeMono-VariableFont_wght.ttf",
  variable: "--font-kode-mono",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Le Thanh Phat | Software Engineer - Full-Stack & DevOps",
  description:
    "Portfolio of Le Thanh Phat - Software Engineer with 2+ years experience in Full-Stack development, DevOps, HRM, CRM, AI Logistics, and Multi-Agent engineering.",
  keywords: [
    "Le Thanh Phat",
    "Software Engineer",
    "Full-Stack Developer",
    "DevOps",
    "Next.js",
    "React",
    "NestJS",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "AI Coding"
  ],
  authors: [{ name: "Le Thanh Phat" }],
  openGraph: {
    title: "Le Thanh Phat | Software Engineer - Full-Stack & DevOps",
    description:
      "Explore enterprise platforms, architecture highlights, and engineering experience of Le Thanh Phat.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${kodeMono.variable} font-sans antialiased bg-[#111110] text-[#eeeeec] min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
