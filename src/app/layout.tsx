import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BM AI Voice Bot - Next-Generation Voice AI Technology",
  description: "Revolutionary AI voice technology that understands natural language and eliminates wait times. Transform your customer service with human-like conversations in English and Swahili.",
  keywords: "AI voice bot, customer service, natural language processing, Swahili, English, Kenya, voice AI, chatbot",
  authors: [{ name: "BM AI Voice Bot" }],
  openGraph: {
    title: "BM AI Voice Bot - Next-Generation Voice AI",
    description: "Transform your customer service with AI voice technology that speaks English and Swahili",
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
      </body>
    </html>
  );
}
