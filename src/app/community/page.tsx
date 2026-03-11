import { createMetadata } from "@/lib/metadata";
import { HERO_IMAGES, CTA_IMAGES, COMMUNITY_VIDEOS } from "@/lib/placeholders";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { PreFooterCTA } from "@/components/shared/PreFooterCTA";

export const metadata = createMetadata({
  title: "Our Community",
  description:
    "See St Katharine Rural Connect in action — outdoor games, social gatherings, and community celebrations that bring rural people together.",
  path: "/community",
});

const videos = [
  {
    src: COMMUNITY_VIDEOS.outdoorGames,
    title: "Outdoor Games Day",
    description:
      "Fun and friendly competition in the fresh air, bringing people together through shared laughter.",
  },
  {
    src: COMMUNITY_VIDEOS.indoorGathering,
    title: "Games & Social Night",
    description:
      "Card games, board games, and good company at our community hall gatherings.",
  },
  {
    src: COMMUNITY_VIDEOS.eventSetup,
    title: "Community Celebrations",
    description:
      "Preparing for events that celebrate local life and recognise the people who make it special.",
  },
  {
    src: COMMUNITY_VIDEOS.communityMeal,
    title: "Sharing a Meal Together",
    description:
      "Long tables, good food, and even better conversation at our outdoor community suppers.",
  },
  {
    src: COMMUNITY_VIDEOS.indoorActivity,
    title: "Indoor Activity Night",
    description:
      "Getting together for fun and games — no matter the weather, the energy is always warm.",
  },
  {
    src: COMMUNITY_VIDEOS.paintNight,
    title: "Creative Evenings",
    description:
      "Sunflowers, paintbrushes, and plenty of laughs at our community paint nights.",
  },
] as const;

export default function CommunityPage() {
  return (
    <>
      {/* 1. Interior Hero */}
      <InteriorHero
        heading="Our *Community*"
        backgroundImage={HERO_IMAGES.community}
        objectPosition="center 35%"
      />

      {/* 2. Intro section */}
      <section className="bg-surface-page px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel text="COMMUNITY IN ACTION" />
              <h2 className="mt-5 font-heading text-4xl font-semibold text-text-primary md:text-5xl">
                Real Moments
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg leading-relaxed text-text-body">
                St Katharine Rural Connect is about more than services &mdash;
                it&rsquo;s about people coming together. From outdoor games on
                a summer afternoon to quiet evenings around a table, these
                moments are what community looks like. No rehearsals, no
                scripts &mdash; just real people enjoying real connection.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-body">
                These clips were captured by the people who were there,
                sharing a glimpse of the warmth and belonging that runs
                through everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Video showcase */}
      <section className="bg-surface-page px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel text="HIGHLIGHTS" align="center" />
          <EmphasisHeading
            text="Moments That *Matter*"
            as="h2"
            className="mx-auto mt-5 max-w-2xl text-center text-3xl text-text-primary md:text-4xl"
          />

          {/* Portrait video grid — 3 columns desktop, 2 tablet, 1 mobile */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {videos.map((video) => (
              <article
                key={video.src}
                className="group flex flex-col"
              >
                {/* Video container — portrait aspect */}
                <div className="relative overflow-hidden rounded-[20px] bg-primary-950">
                  <div className="aspect-[9/16]">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-hidden="true"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                  </div>

                  {/* Subtle gradient at bottom for depth */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-primary-950/40 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                {/* Caption card */}
                <div className="mt-5 px-1">
                  <h3 className="font-heading text-xl font-semibold text-text-primary">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Full-width quote / message band */}
      <section className="bg-primary-950 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="mb-6 block font-heading text-6xl leading-none text-accent-500/30"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <blockquote>
            <p className="font-heading text-2xl leading-relaxed text-white/90 italic md:text-3xl">
              The events and programs have created a stronger sense of
              connection in our area. People are meeting, talking, and
              supporting one another in ways that weren&rsquo;t happening
              before.
            </p>
          </blockquote>
          <cite className="mt-8 block text-sm font-medium not-italic text-white/50">
            &mdash; Community Member
          </cite>
        </div>
      </section>

      {/* 5. PreFooterCTA */}
      <PreFooterCTA
        backgroundImage={CTA_IMAGES.community}
        heading="Be Part of *Something* Real"
        body="Whether you want to attend an event, volunteer your time, or just come along and see what we're about — you're welcome here."
        ctaLabel="Get Involved"
        ctaHref="/get-involved"
      />
    </>
  );
}
