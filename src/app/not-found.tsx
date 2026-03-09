import Link from "next/link";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";

export const metadata = {
  title: "Page Not Found | St Katharine Rural Connect",
  description:
    "The page you're looking for doesn't exist or has been moved. Return to the St Katharine Rural Connect homepage to find what you need.",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 py-20">
      {/* Dark gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800"
        aria-hidden="true"
      />

      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg">
        {/* Large decorative 404 */}
        <p
          className="font-heading text-[8rem] leading-none font-semibold text-white/[0.06] sm:text-[10rem] select-none"
          aria-hidden="true"
        >
          404
        </p>

        <div className="-mt-16 sm:-mt-20">
          <EmphasisHeading
            text="Oops, *Nothing* Here"
            as="h1"
            className="text-3xl md:text-4xl text-white"
          />

          <p className="mt-4 mb-10 font-body text-base text-white/70 max-w-md mx-auto">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been
            moved. Let&rsquo;s get you back on track.
          </p>

          <div className="flex justify-center">
            <CircleArrowCTA label="Back to Home" href="/" variant="light" />
          </div>
        </div>

        {/* Secondary links */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <Link
            href="/services"
            className="font-body text-sm font-medium text-white/50 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            View Services
          </Link>
          <span className="text-white/20" aria-hidden="true">
            |
          </span>
          <Link
            href="/contact"
            className="font-body text-sm font-medium text-white/50 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
