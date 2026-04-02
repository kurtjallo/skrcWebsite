import { cormorantGaramond, dmSans } from "@/lib/fonts";
import { JsonLd, NGO_SCHEMA } from "@/components/shared/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import "../globals.css";

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={SITE_CONFIG.locale}
      className={`${cormorantGaramond.variable} ${dmSans.variable}`}
    >
      <body className="font-body text-base text-white antialiased bg-primary-950 min-h-screen">
        <JsonLd data={NGO_SCHEMA} />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
