import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "William Petrik",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/e867f74e8d.js" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
