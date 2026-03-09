import type { TeamMember } from "@/types";

function getInitials(name: string): string {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

interface TeamMemberCardProps {
  member: TeamMember;
  /** Vary gradient per card for visual distinction */
  gradientIndex?: number;
}

const GRADIENTS = [
  "from-primary-800 via-primary-900 to-primary-950",
  "from-primary-900 via-primary-800 to-primary-950",
  "from-primary-950 via-primary-900 to-primary-800",
  "from-primary-800 via-primary-950 to-primary-900",
  "from-primary-900 via-primary-950 to-primary-800",
  "from-primary-950 via-primary-800 to-primary-900",
  "from-primary-800 to-primary-950",
];

export function TeamMemberCard({ member, gradientIndex = 0 }: TeamMemberCardProps) {
  const initials = getInitials(member.name);
  const gradient = GRADIENTS[gradientIndex % GRADIENTS.length];

  return (
    <article className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg motion-safe:hover:-translate-y-1"
      style={{ aspectRatio: "3 / 4" }}
    >
      {/* Gradient placeholder background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
        {/* Initials centered as placeholder for photo */}
        <div className="flex h-full items-center justify-center">
          <span className="font-heading text-5xl font-semibold text-white/20">
            {initials}
          </span>
        </div>
      </div>

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
