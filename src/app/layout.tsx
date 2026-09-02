import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { DarkModeProvider } from "./context/DarkModeContext";
import Container from "./main_container";

import "./globals.css";

const mono = Figtree({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Curie Cha",
  icons: {
    icon: "/recursive_tree.png",
  },
};

const noFlashScript = `(function(){try{var s=localStorage.getItem('darkMode');var dark=s?s==='dark':true;if(dark)document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className={mono.className}>
        <DarkModeProvider>
          <Container>{children}</Container>
        </DarkModeProvider>
        <Analytics />
      </body>
    </html>
  );
}
