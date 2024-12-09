import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TabBar from "./components/TabBar";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <TabBar />
        <div className="min-h-screen sm:px-32 pb-8 sm:p-8 font-[family-name:var(--font-geist-sans)]">
          {children}
        </div>
      </body>
    </html>
  );
}
