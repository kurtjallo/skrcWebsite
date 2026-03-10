import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  src: string;
  className?: string;
  /** Optional poster image shown while video loads */
  poster?: string;
}

/**
 * Muted autoplay looping video background.
 * Uses playsinline for iOS, object-cover to fill container.
 */
export function VideoBackground({
  src,
  className,
  poster,
}: VideoBackgroundProps) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
