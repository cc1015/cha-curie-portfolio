import type { Metadata } from "next";
import { Figtree } from 'next/font/google'
import "./globals.css";
import TabBar from "./components/TabBar";

const mono = Figtree({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: "Curie Cha",
  icons: {
    icon: '/recursive_tree.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={mono.className}
      >
        <TabBar />
        <div className="min-h-screen sm:px-32 pb-8 sm:p-8">
          {children}
        </div>
      </body>
    </html>
  );
}
