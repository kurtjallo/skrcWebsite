import { notFound } from "next/navigation";
import { servicePillars, getServiceBySlug } from "@/data/services";
import { PillarDetail } from "@/components/services/PillarDetail";
import { SITE_CONFIG } from "@/lib/constants";
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

  const title = `${pillar.name} | St Katharine Rural Connect`;
  const description = pillar.whatHappens;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/services/${slug}`,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
    },
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
