import Image from "next/image";
import { cn } from "@/lib/utils";

interface InsetHeroProps {
  backgroundImage: string;
  children: React.ReactNode;
  height?: string;
  className?: string;
  overlayClassName?: string;
  priority?: boolean;
}

export function InsetHero({
  backgroundImage,
  children,
  height = "70vh",
  className,
  overlayClassName,
  priority = true,
}: InsetHeroProps) {
  return (
    <section className={cn("px-4 pt-4", className)}>
      <div
        className="relative overflow-hidden rounded-[20px]"
        style={{ minHeight: height }}
      >
        {/* Background image -- decorative, content is overlaid text */}
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority={priority}
        />

        {/* Dark overlay gradient */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-primary-950/80 via-primary-950/50 to-primary-950/30",
            overlayClassName
          )}
        />



        {/* Content area -- positioned at bottom with large top padding for transparent header */}
        <div className="absolute inset-0 z-10 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:pb-20 md:pt-40">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
