import type { Metadata } from "next";
import { Noto_Sans_Hatran } from 'next/font/google'
import "./globals.css";
import TabBar from "./components/TabBar";

const mono = Noto_Sans_Hatran({ subsets: ['hatran'], weight: '400' })

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
        <div className="min-h-screen sm:px-32 pb-8 sm:p-8 font-[family-name:var(--rochester-font)]">
          {children}
        </div>
      </body>
    </html>
  );
}
