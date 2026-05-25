import type { Metadata } from "next";
import { Kaisei_Decol } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const kaiseiDecol = Kaisei_Decol({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-kaisei",
});

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
    <html lang="en" className={kaiseiDecol.variable}>
      <body>
        <Navbar></Navbar>
        <div className="pageContent">{children}</div>
      </body>
    </html>
  );
}
