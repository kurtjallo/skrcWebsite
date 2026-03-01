import { notFound } from "next/navigation";
import { servicePillars, getServiceBySlug } from "@/data/services";
import { PillarDetail } from "@/components/services/PillarDetail";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicePillars.map((pillar) => ({
    slug: pillar.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getServiceBySlug(slug);

  if (!pillar) {
    return { title: "Service Not Found | St Katharine Rural Connect" };
  }

  return {
    title: `${pillar.name} | St Katharine Rural Connect`,
    description: pillar.whatHappens,
  };
}

export default async function ServicePillarPage({ params }: PageProps) {
  const { slug } = await params;
  const pillar = getServiceBySlug(slug);

  if (!pillar) {
    notFound();
  }

  return <PillarDetail pillar={pillar} />;
}
