import Link from "next/link";
import { Heart, Wheat, Anchor, Users, ArrowRight } from "lucide-react";
import type { ServicePillar } from "@/types/services";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Heart,
  Wheat,
  Anchor,
  Users,
};

interface PillarCardProps {
  pillar: ServicePillar;
}

export function PillarCard({ pillar }: PillarCardProps) {
  const Icon = ICON_MAP[pillar.icon] ?? Heart;

  return (
    <Link href={`/services/${pillar.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-white p-8 shadow-sm transition-shadow duration-300 ease-premium motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg motion-safe:transition-transform motion-safe:duration-400">
        {/* Gold accent line -- scales in on hover */}
        <div
          className="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent-500 transition-transform duration-400 ease-premium group-hover:scale-x-100"
          aria-hidden="true"
        />

        {/* Icon */}
        <Icon
          className="size-8 text-accent-500"
          strokeWidth={1.5}
          aria-hidden="true"
        />

        {/* Pillar name */}
        <h3 className="mt-5 font-heading text-2xl font-semibold text-text-primary">
          {pillar.name}
        </h3>

        {/* Tagline */}
        <p className="mt-3 text-base leading-relaxed text-text-body">
          {pillar.tagline}
        </p>

        {/* "Find out more" link indicator */}
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 transition-colors duration-200 group-hover:text-accent-500">
          Find out more
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
