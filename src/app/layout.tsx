import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "TradeFinder | Find the best Trades available for Stocks and Indices",
  description: "TradeFinder is an advanced live market scanner to find the best trading opportunity in intraday, swing, and scalping trading. Available for F&O stocks and Option buying for indices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable}`}>
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  );
}
