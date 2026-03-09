import type { TeamMember } from "@/types";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { cn } from "@/lib/utils";

interface TeamGridProps {
  members: TeamMember[];
  columns?: 2 | 3 | 4;
}

const columnClasses: Record<number, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export function TeamGrid({ members, columns = 3 }: TeamGridProps) {
  return (
    <div className={cn("grid gap-6", columnClasses[columns])}>
      {members.map((member, index) => (
        <TeamMemberCard key={member.id} member={member} gradientIndex={index} />
      ))}
    </div>
  );
}
