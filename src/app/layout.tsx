import type { Metadata } from "next";
import { cormorantGaramond, dmSans } from "@/lib/fonts";
import { SITE_CONFIG } from "@/lib/constants";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, NGO_SCHEMA } from "@/components/shared/JsonLd";
import { LazyMotionProvider } from "@/components/shared/LazyMotionProvider";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.tagline,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.tagline,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE_CONFIG.locale} className={`${cormorantGaramond.variable} ${dmSans.variable}`}>
      <body className="font-body text-base text-text-body bg-surface-page antialiased">
        <JsonLd data={NGO_SCHEMA} />
        <LazyMotionProvider>
          <SkipLink />
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LazyMotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
