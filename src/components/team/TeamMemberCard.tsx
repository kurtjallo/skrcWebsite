import Image from "next/image";
import type { TeamMember } from "@/types";
import { PORTRAITS } from "@/lib/placeholders";

const PORTRAIT_IMAGES = [
  PORTRAITS.woman3,
  PORTRAITS.man4,
  PORTRAITS.woman2,
  PORTRAITS.man3,
  PORTRAITS.woman1,
  PORTRAITS.man2,
  PORTRAITS.man1,
];

interface TeamMemberCardProps {
  member: TeamMember;
  /** Vary portrait per card for visual distinction */
  gradientIndex?: number;
}

export function TeamMemberCard({ member, gradientIndex = 0 }: TeamMemberCardProps) {
  const portrait = PORTRAIT_IMAGES[gradientIndex % PORTRAIT_IMAGES.length];

  return (
    <article className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg motion-safe:hover:-translate-y-1"
      style={{ aspectRatio: "3 / 4" }}
    >
      <Image
        src={portrait}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      {/* Dark gradient from bottom for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/40 to-transparent" />

      {/* Frosted glass overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 backdrop-blur-md bg-white/10 border-t border-white/10">
        <div className="p-5">
          <h3 className="font-heading text-xl font-semibold text-white">
            {member.name}
          </h3>
          <p className="mt-1 font-body text-sm font-medium text-accent-300">
            {member.role}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/70 line-clamp-3">
            {member.bio}
          </p>
        </div>
      </div>
    </article>
  );
}
