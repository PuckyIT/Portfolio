import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configure the Kode Mono font
const kodeMono = localFont({
  src: "/fonts/KodeMono-Regular.ttf", // Path relative to the `public` directory
  variable: "--font-kode-mono",
  weight: "400", // Set to match the weight of the regular font
});

export const metadata: Metadata = {
  title: "Le Thanh Phat",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kodeMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
