import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  weight: ['100', '300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "GALDC - Grupul de Actiune Locala Dobrogea Centrala",
  description: "Grupul de Actiune Locala Dobrogea Centrala este un parteneriat public privat constituit conform programului LEADER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" data-theme="corporate">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${roboto.className}`}>
        <div>
          {children}
        </div>

      </body>
    </html>
  );
}