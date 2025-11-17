import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santiago Junrei - Camino de Santiago Guide",
  description: "Guía completa del Camino de Santiago para peregrinos",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages({locale});

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className={`flex flex-col min-h-screen ${inter.className}`}>
        <Header />
        <main className="grow pt-24">
          {children}
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
