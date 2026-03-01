import type { Metadata } from "next";
import { cormorantGaramond, dmSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "St Katharine Rural Connect",
  description: "Support, connection, and care for rural communities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${cormorantGaramond.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
