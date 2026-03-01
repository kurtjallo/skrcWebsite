import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import SelfIdCards from "@/components/home/SelfIdCards";
import ServicePillars from "@/components/home/ServicePillars";
import ImpactStats from "@/components/home/ImpactStats";
import FeaturedTestimonial from "@/components/home/FeaturedTestimonial";
import EventsPreview from "@/components/home/EventsPreview";
import GetInvolved from "@/components/home/GetInvolved";
import Newsletter from "@/components/home/Newsletter";
import PartnerLogos from "@/components/home/PartnerLogos";

export const metadata: Metadata = {
  title: "St Katharine Rural Connect | Support for Rural Communities",
  description:
    "St Katharine Rural Connect strengthens rural communities through accessible support, practical resources, and meaningful belonging for farmers, offshore workers, families, and community members.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelfIdCards />
      <ServicePillars />
      <ImpactStats />
      <FeaturedTestimonial />
      <EventsPreview />
      <GetInvolved />
      <Newsletter />
      <PartnerLogos />
    </>
  );
}
