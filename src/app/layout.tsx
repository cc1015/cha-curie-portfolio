import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { DarkModeProvider } from "./context/DarkModeContext";
import Container from "./main_container";

import "./globals.css";

import { Analytics } from "@vercel/analytics/next"

const mono = Figtree({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Curie Cha",
  icons: {
    icon: "/recursive_tree.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={mono.className}>
        <DarkModeProvider>
          <Container>{children}</Container>
        </DarkModeProvider>
        <Analytics />
      </body>
    </html>
  );
}
