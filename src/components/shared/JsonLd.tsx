import { SITE_CONFIG } from "@/lib/constants";

/**
 * Generic JSON-LD structured data script injector.
 * Renders a <script type="application/ld+json"> tag with the provided data.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * NGO Organization schema for structured data.
 * Used on every page via the root layout to help search engines
 * understand SKRC as a Scottish community support NGO.
 */
export function ngoSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "St Katharine Rural Connect",
    alternateName: "SKRC",
    description: SITE_CONFIG.tagline,
    url: "https://skrc.org.uk",
    telephone: SITE_CONFIG.phoneHref.replace("tel:", ""),
    email: SITE_CONFIG.email,
    areaServed: {
      "@type": "Place",
      name: "Rural Scotland",
    },
    serviceType: [
      "Community Wellness and Mental Health",
      "Agricultural Support and Resources",
      "Offshore Worker Engagement and Support",
      "Community Connection and Development",
    ],
    sameAs: [],
  };
}

/**
 * CommunityEvent schema for structured data on event detail pages.
 * Helps search engines surface events in rich results.
 */
export function communityEventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  eventAttendanceMode,
  url,
}: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  eventAttendanceMode: "online" | "offline" | "mixed";
  url: string;
}): Record<string, unknown> {
  const attendanceModeMap = {
    online: "https://schema.org/OnlineEventAttendanceMode",
    offline: "https://schema.org/OfflineEventAttendanceMode",
    mixed: "https://schema.org/MixedEventAttendanceMode",
  };

  return {
    "@context": "https://schema.org",
    "@type": "CommunityEvent",
    name,
    description,
    startDate,
    ...(endDate && { endDate }),
    location: {
      "@type": eventAttendanceMode === "online" ? "VirtualLocation" : "Place",
      name: location,
      ...(eventAttendanceMode === "online" && { url }),
    },
    eventAttendanceMode: attendanceModeMap[eventAttendanceMode],
    organizer: {
      "@type": "NGO",
      name: "St Katharine Rural Connect",
      url: "https://skrc.org.uk",
    },
    url,
  };
}
