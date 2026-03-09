import { cormorantGaramond, dmSans } from "@/lib/fonts";
import { JsonLd, ngoSchema } from "@/components/shared/JsonLd";
import "../globals.css";

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${cormorantGaramond.variable} ${dmSans.variable}`}
    >
      <body className="font-body text-base text-white antialiased bg-primary-950 min-h-screen">
        <JsonLd data={ngoSchema()} />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
