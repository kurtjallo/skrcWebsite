import type { Metadata } from "next";
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
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
