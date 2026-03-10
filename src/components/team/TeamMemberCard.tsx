"use client";

import { useState } from "react";
import Image from "next/image";
import type { TeamMember } from "@/types";

interface TeamMemberCardProps {
  member: TeamMember;
  gradientIndex?: number;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [expanded, setExpanded] = useState(false);

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <article className="group overflow-hidden rounded-2xl bg-white border border-divider transition-[transform,box-shadow] duration-300 hover:shadow-lg motion-safe:hover:-translate-y-1">
      {/* Photo */}
      <div className="relative aspect-[3/4]">
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-primary-100">
            <span className="font-heading text-4xl font-semibold text-primary-400">
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Info below photo */}
      <div className="p-5">
        <h3 className="font-heading text-xl font-semibold text-text-primary">
          {member.name}
        </h3>
        <p className="mt-1 font-body text-sm font-medium text-accent-600">
          {member.role}
        </p>
        <p
          className={`mt-3 text-sm leading-relaxed text-text-muted ${expanded ? "" : "line-clamp-3"}`}
        >
          {member.bio}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
    </article>
  );
}
