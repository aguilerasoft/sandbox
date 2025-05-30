import type { Metadata } from "next";
import { Lexend_Deca, Geist_Mono } from "next/font/google";
import "./globals.css"; // Import global styles
import Navbar from "@/components/navbar"; // Import Navbar component
import Header from "@/components/header"; // Import Header component

// Configure Lexend Deca font
const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

// Configure Geist Mono font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the application
export const metadata: Metadata = {
  title: "Sandbox Regulatorio",
  description: "Sistema de Sandbox",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Define children prop type
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexendDeca.variable} ${geistMono.variable} antialiased`} // Apply font variables and antialiasing
      >
        <Navbar /> 
        <Header /> 
        {children} 
      </body>
    </html>
  );
}
