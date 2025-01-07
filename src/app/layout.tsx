import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { memo } from "react";
import "./globals.css";

const MemoizedNavbar = memo(Navbar);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fennonauts | Finnish Indie Game Publisher",
  description:
    "Leading Finnish indie game publisher showcasing Nordic gaming excellence. Discover innovative games from Finland's most talented developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <MemoizedNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
