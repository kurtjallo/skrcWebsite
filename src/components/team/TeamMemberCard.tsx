import type { TeamMember } from "@/types";

function getInitials(name: string): string {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const initials = getInitials(member.name);
  const connectionLabel =
    member.group === "board" ? "Rural connection" : "Responsibility";

  return (
    <article className="group relative overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition-all duration-300 ease-premium hover:border-accent-300 hover:shadow-md before:absolute before:left-0 before:top-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-accent-500 before:transition-transform before:duration-500 hover:before:scale-x-100">
      {/* Avatar placeholder */}
      <div className="flex h-48 items-center justify-center bg-stone-200">
        <span className="font-heading text-3xl font-semibold text-stone-400">
          {initials}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-3 p-6">
        <h3 className="font-heading text-xl font-semibold text-primary-900">
          {member.name}
        </h3>
        <p className="font-body text-sm font-medium uppercase tracking-wide text-accent-600">
          {member.role}
        </p>
        <p className="text-sm leading-relaxed text-text-body">{member.bio}</p>
        <p className="mt-3 border-t border-stone-100 pt-3 text-xs italic text-text-muted">
          {connectionLabel}: {member.connection}
        </p>
      </div>
    </article>
  );
}
