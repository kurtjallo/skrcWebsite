"use client";

import React from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  variant?: "light-a" | "light-b" | "dark" | "auto";
  padded?: boolean;
  animated?: boolean;
  id?: string;
}

const AUTO_BACKGROUNDS = [
  "bg-stone-50",
  "bg-stone-100",
  "bg-stone-50",
  "bg-primary-900 text-stone-100",
  "bg-stone-100",
] as const;

function getAutoBackground(index: number): string {
  return AUTO_BACKGROUNDS[index % AUTO_BACKGROUNDS.length];
}

function getVariantBackground(variant: SectionWrapperProps["variant"], index: number): string {
  switch (variant) {
    case "light-a":
      return "bg-stone-50";
    case "light-b":
      return "bg-stone-100";
    case "dark":
      return "bg-primary-900 text-stone-100";
    case "auto":
    default:
      return getAutoBackground(index);
  }
}

export function SectionWrapper({
  children,
  className,
  index = 0,
  variant = "auto",
  padded = true,
  animated = true,
  id,
}: SectionWrapperProps) {
  const backgroundClass = getVariantBackground(variant, index);
  const content = (
    <div className="mx-auto max-w-7xl">{children}</div>
  );

  return (
    <section
      id={id}
      className={cn(
        backgroundClass,
        padded && "py-20 px-6",
        className
      )}
    >
      {animated ? (
        <AnimatedSection>{content}</AnimatedSection>
      ) : (
        content
      )}
    </section>
  );
}
