import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/whatsapp";
import { Analytics } from "@vercel/analytics/react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "portfolio biloa",
  description: "portfolio du developpeur biloa philemon armand developpeur fullstack nodejs",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <WhatsAppButton/>
        <Analytics/>
      </body>
    </html>
  );
}
