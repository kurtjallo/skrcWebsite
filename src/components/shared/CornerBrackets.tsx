import React from "react";
import { cn } from "@/lib/utils";

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface CornerBracketsProps {
  children: React.ReactNode;
  className?: string;
  corners?: Corner[];
  size?: number;
  thickness?: number;
  opacity?: number;
  color?: string;
}

const ACCENT_COLOR = "#3b3bff";

function CornerElement({
  corner,
  size,
  thickness,
  opacity,
  color,
}: {
  corner: Corner;
  size: number;
  thickness: number;
  opacity: number;
  color: string;
}) {
  const positionClasses: Record<Corner, string> = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const isTop = corner.startsWith("top");
  const isLeft = corner.endsWith("left");

  return (
    <div className={cn("absolute", positionClasses[corner])} style={{ opacity }}>
      {/* Horizontal arm */}
      <div
        className="absolute"
        style={{
          width: size,
          height: thickness,
          backgroundColor: color,
          top: isTop ? 0 : undefined,
          bottom: isTop ? undefined : 0,
          left: isLeft ? 0 : undefined,
          right: isLeft ? undefined : 0,
        }}
      />
      {/* Vertical arm */}
      <div
        className="absolute"
        style={{
          width: thickness,
          height: size,
          backgroundColor: color,
          top: isTop ? 0 : undefined,
          bottom: isTop ? undefined : 0,
          left: isLeft ? 0 : undefined,
          right: isLeft ? undefined : 0,
        }}
      />
    </div>
  );
}

export function CornerBrackets({
  children,
  className,
  corners = ["top-left", "top-right", "bottom-left", "bottom-right"],
  size = 40,
  thickness = 1,
  opacity = 0.4,
  color = ACCENT_COLOR,
}: CornerBracketsProps) {
  return (
    <div className={cn("relative", className)}>
      {corners.map((corner) => (
        <CornerElement
          key={corner}
          corner={corner}
          size={size}
          thickness={thickness}
          opacity={opacity}
          color={color}
        />
      ))}
      {children}
    </div>
  );
}
