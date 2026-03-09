import { InsetHero } from "./InsetHero";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";

interface InteriorHeroProps {
  heading: string;
  backgroundImage: string;
  className?: string;
}

export function InteriorHero({
  heading,
  backgroundImage,
  className,
}: InteriorHeroProps) {
  return (
    <InsetHero
      backgroundImage={backgroundImage}
      height="45vh"
      className={className}
      overlayClassName="bg-primary-950/60"
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
