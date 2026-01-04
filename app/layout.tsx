import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Order from "@/app/components/Order";
import InstallPrompt from "@/app/components/InstallPrompt";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hot & Souce Pizza",
  description: "Order delicious pizza online easily via WhatsApp. Free home delivery!",
  themeColor: "#10B981",
  manifest: "/manifest.json",
  icons: [
    {
      url: "/icons/icon-192x192.png",
      type: "image/png",
      sizes: "192x192",
    },
    {
      url: "/icons/icon-512x512.png",
      type: "image/png",
      sizes: "512x512",
    },
  ],
  openGraph: {
    title: "Hot & Souce Pizza",
    description: "Order delicious pizza online easily via WhatsApp. Free home delivery!",
    url: "https://yourdomain.com", // <-- replace with your deployed domain
    siteName: "Hot & Souce Pizza",
    images: [
      {
        url: "https://hotsauce-pizza.vercel.app/images/baharikababPizza.jpg", // <-- replace with share image
        width: 1200,
        height: 630,
        alt: "Hot & Souce Pizza",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hot & Souce Pizza",
    description: "Order delicious pizza online easily via WhatsApp. Free home delivery!",
    images: ["https://hotsauce-pizza.vercel.app/images/baharikababPizza.jpg"], // <-- same share image
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <InstallPrompt /> {/* ✅ Install popup for PWA */}
        <Order /> {/* Cart + WhatsApp order component */}
      </body>
    </html>
  );
}
