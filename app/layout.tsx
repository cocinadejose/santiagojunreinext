// Reemplaza TODO el contenido de app/layout.tsx con esto

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santiago Junrei - Camino de Santiago Guide",
  description: "Guía completa del Camino de Santiago para peregrinos japoneses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 return (
  <html lang="es" className="scroll-smooth">
    {/* ... el resto del código ... */}

      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {/* 
            Este padding (pt-24) empuja el contenido hacia abajo.
            Si tu Header es más alto, aumenta este valor (ej: pt-28, pt-32).
          */}
          <main className="grow pt-24"> {/* O usa 'flex-grow' si 'grow' da problemas */}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
