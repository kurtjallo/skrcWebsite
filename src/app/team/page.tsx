import { createMetadata } from "@/lib/metadata";
import { boardMembers, staffMembers } from "@/data/team-members";
import { TeamGrid } from "@/components/team/TeamGrid";
import { HERO_IMAGES } from "@/lib/placeholders";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";

export const metadata = createMetadata({
  title: "Board & Staff",
  description:
    "Meet the Board of Directors and staff team behind St Katharine Rural Connect. Our team brings rural experience, community commitment, and professional expertise to supporting rural Scotland.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <InteriorHero
        heading="Our *Team*"
        backgroundImage={HERO_IMAGES.team}
      />

      {/* Board of Directors */}
      <section className="bg-surface-page py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionLabel text="LEADERSHIP" />
          <EmphasisHeading
            text="Board of *Directors*"
            as="h2"
            className="mt-6 text-3xl md:text-4xl text-text-primary"
          />
          <p className="mb-10 mt-4 max-w-prose text-base text-text-muted">
            Our Board provides strategic leadership, governance, and
            stewardship, ensuring SKRC stays true to its mission and the
            communities it serves.
          </p>
          <TeamGrid members={boardMembers} columns={4} />
        </div>
      </section>

      {/* Staff Team */}
      <section className="bg-surface-page pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-20 border-t border-divider md:mb-28"
            aria-hidden="true"
          />
          <SectionLabel text="OUR PEOPLE" />
          <EmphasisHeading
            text="Our *Staff*"
            as="h2"
            className="mt-6 text-3xl md:text-4xl text-text-primary"
          />
          <p className="mb-10 mt-4 max-w-prose text-base text-text-muted">
            The team who deliver SKRC&rsquo;s services day to day, bringing
            warmth, expertise, and genuine care to every interaction.
          </p>
          <TeamGrid members={staffMembers} columns={3} />
        </div>
      </section>
    </>
  );
}
