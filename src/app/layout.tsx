import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import banner from "../../public/helper/banner-gal.jpg"
import Image from "next/image";
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
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <div className="flex flex-col flex-grow container mx-auto px-4">
          <Image src={banner} alt="banner gal" width={1280} height={300} />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}