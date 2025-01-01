import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Feliz 2025",
  description: "Que venha mais um ano!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} flex flex-col min-h-screen bg-yellow-50`}>
        {children}
      </body>
    </html>
  );
}
