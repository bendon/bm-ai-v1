import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BM AI - Unified Communication Platform | SMS, Voice & WhatsApp",
  description: "Unified communication platform for SMS, Voice Calls, and WhatsApp. AI-powered conversations across all channels. Zero wait times. 24/7 automation in English and Swahili.",
  keywords: "BM AI, SMS, voice calls, WhatsApp, AI communication platform, customer service, natural language processing, Swahili, English, Kenya, voice AI, chatbot, messaging",
  authors: [{ name: "BM AI" }],
  openGraph: {
    title: "BM AI - Unified Communication Platform",
    description: "SMS, Voice Calls, and WhatsApp - All in one AI-powered communication platform",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
