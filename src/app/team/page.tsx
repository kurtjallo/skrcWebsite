import { createMetadata } from "@/lib/metadata";
import { boardMembers, staffMembers } from "@/data/team-members";
import { TeamGrid } from "@/components/team/TeamGrid";

export const metadata = createMetadata({
  title: "Board & Staff",
  description:
    "Meet the Board of Directors and staff team behind St Katharine Rural Connect. Our team brings rural experience, community commitment, and professional expertise to supporting rural Scotland.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      {/* Section 1: Page Header */}
      <section className="bg-stone-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-body text-overline font-bold uppercase tracking-widest text-accent-600">
            Our Team
          </p>
          <h1 className="mt-4 font-heading text-5xl font-semibold text-text-primary">
            The People Behind SKRC
          </h1>
          <p className="mt-6 max-w-prose text-lg text-text-body">
            Our team brings together people who understand rural life firsthand
            &mdash; from farming families to offshore workers, from community
            builders to mental health professionals. Every person at SKRC shares
            a commitment to making rural communities stronger.
          </p>
        </div>
      </section>

      {/* Section 2: Board of Directors */}
      <section className="bg-stone-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-4xl font-semibold text-text-primary">
            Board of Directors
          </h2>
          <p className="mb-8 mt-4 max-w-prose text-base text-text-muted">
            Our Board provides strategic leadership, governance, and
            stewardship, ensuring SKRC stays true to its mission and the
            communities it serves.
          </p>
          <TeamGrid members={boardMembers} columns={4} />
        </div>
      </section>

      {/* Section 3: Staff Team */}
      <section className="bg-stone-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-4xl font-semibold text-text-primary">
            Our Staff
          </h2>
          <p className="mb-8 mt-4 max-w-prose text-base text-text-muted">
            The team who deliver SKRC&rsquo;s services day to day, bringing
            warmth, expertise, and genuine care to every interaction.
          </p>
          <TeamGrid members={staffMembers} columns={3} />
        </div>
      </section>
    </>
  );
}
