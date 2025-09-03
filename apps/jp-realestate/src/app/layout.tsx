import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JP Real Estate",
  description: "Developed by Nolan Strait",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${lato.variable} antialiased flex flex-col min-h-screen`}>        
        <NavBar/>
        <div className="grow">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
