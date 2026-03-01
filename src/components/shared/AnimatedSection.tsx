"use client";

import React from "react";
import { m, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  as?: "div" | "section" | "article";
}

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: { delay: number; staggerChildren: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      delay: custom.delay,
      staggerChildren: custom.staggerChildren,
    },
  }),
};

export const animatedChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  staggerChildren = 0.12,
  as = "div",
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = m[as];

  return (
    <MotionTag
      className={className}
      variants={containerVariants}
      custom={{ delay, staggerChildren }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </MotionTag>
  );
}
