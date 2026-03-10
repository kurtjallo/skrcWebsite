import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import ServicePillars from "@/components/home/ServicePillars";
import ImpactStories from "@/components/home/ImpactStories";
import TestimonialCards from "@/components/home/TestimonialCards";
import OurApproach from "@/components/home/OurApproach";
import PartnerLogos from "@/components/home/PartnerLogos";

const title = "St Katharine Rural Connect | Support for Rural Communities";
const description =
  "St Katharine Rural Connect strengthens rural communities through accessible support, practical resources, and meaningful belonging for farmers, offshore workers, families, and community members.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.locale,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ServicePillars />
      <ImpactStories />
      <TestimonialCards />
      <OurApproach />
      <PartnerLogos />
    </>
  );
}
