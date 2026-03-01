import React from "react";
import { cn } from "@/lib/utils";

interface TwoColumnLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
  reversed?: boolean;
  gap?: string;
  verticalAlign?: "top" | "center" | "bottom";
}

const ALIGN_MAP = {
  top: "items-start",
  center: "items-center",
  bottom: "items-end",
} as const;

export function TwoColumnLayout({
  left,
  right,
  className,
  reversed = false,
  gap = "gap-12",
  verticalAlign = "top",
}: TwoColumnLayoutProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2",
        gap,
        ALIGN_MAP[verticalAlign],
        className
      )}
    >
      <div className={cn(reversed && "lg:order-2")}>{left}</div>
      <div className={cn(reversed && "lg:order-1")}>{right}</div>
    </div>
  );
}
