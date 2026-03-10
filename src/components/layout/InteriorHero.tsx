import { InsetHero } from "./InsetHero";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";

interface InteriorHeroProps {
  heading: string;
  backgroundImage: string;
  /** Optional video source — plays as background instead of the image */
  backgroundVideo?: string;
  className?: string;
  /** CSS object-position value to control image focal point (e.g. "center 30%") */
  objectPosition?: string;
}

export function InteriorHero({
  heading,
  backgroundImage,
  backgroundVideo,
  className,
  objectPosition,
}: InteriorHeroProps) {
  return (
    <InsetHero
      backgroundImage={backgroundImage}
      backgroundVideo={backgroundVideo}
      height="45vh"
      className={className}
      overlayClassName="bg-primary-950/60"
      objectPosition={objectPosition}
    >
      <div className="flex items-center justify-center text-center pt-8">
        <EmphasisHeading
          text={heading}
          as="h1"
          className="text-4xl md:text-5xl text-white max-w-3xl"
        />
      </div>
    </InsetHero>
  );
}
