import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Minimal Single Page Portfolio",
  description: "Created with Frontend Tribe",
};

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "500", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-black text-white ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
