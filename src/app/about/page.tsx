import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about St Katharine Rural Connect's founding intention, mission, vision, and values. Rooted in the spirit of service, we strengthen rural communities through support, connection, and care.",
  path: "/about",
});

const values = [
  {
    name: "Compassion",
    description: "Meeting people with kindness and understanding",
  },
  {
    name: "Connection",
    description: "Building bridges between people and support",
  },
  {
    name: "Respect",
    description: "Honouring every person\u2019s dignity and story",
  },
  {
    name: "Integrity",
    description: "Being honest, transparent, and trustworthy",
  },
  {
    name: "Accessibility",
    description: "Removing barriers to support and belonging",
  },
  {
    name: "Collaboration",
    description: "Working together for stronger communities",
  },
  {
    name: "Resilience",
    description: "Nurturing the strength within people and places",
  },
] as const;

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* Section 1: Page Header */}
      <section className="bg-stone-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-body text-overline font-bold uppercase tracking-widest text-accent-600">
            About Us
          </p>
          <h1 className="mt-4 font-heading text-5xl font-semibold text-text-primary">
            Rooted in Service, Growing with Community
          </h1>
          <p className="mt-6 max-w-[42rem] text-lg text-text-body">
            St Katharine Rural Connect is a community-rooted initiative
            strengthening social, emotional, and practical support systems for
            rural people and places across Scotland.
          </p>
        </div>
      </section>

      {/* Section 2: Founding Intention */}
      <section className="bg-stone-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left column: Content */}
            <div>
              <h2 className="font-heading text-4xl font-semibold text-text-primary">
                Our Founding Intention
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-base leading-relaxed text-text-body">
                  St Katharine Rural Connect carries forward the spirit and
                  values of St Katharine &mdash; a legacy of service, learning,
                  dignity, and community care. Our founding grew from a simple
                  observation: rural communities across Scotland were quietly
                  carrying immense pressures, from the isolation of farming life
                  to the strain of offshore work, with few places to turn for
                  understanding and support.
                </p>
                <p className="text-base leading-relaxed text-text-body">
                  We were established to change that. Not with grand programmes
                  delivered from a distance, but with genuine, grounded support
                  that meets people where they are. We believe that meaningful
                  change happens through trust, presence, and practical care
                  &mdash; the kind a good neighbour provides, backed by the
                  knowledge and resources to make a real difference.
                </p>
              </div>
            </div>

            {/* Right column: Decorative placeholder */}
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg border-t-2 border-accent-500 bg-stone-200">
              <p className="text-sm italic text-text-muted">
                Landscape imagery coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission, Vision & Values */}
      <section className="bg-stone-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-4xl font-semibold text-text-primary">
            What Guides Us
          </h2>

          {/* Mission */}
          <div className="mt-12">
            <h3 className="font-heading text-3xl font-semibold text-text-primary">
              Our Mission
            </h3>
            <div className="mt-4 rounded-lg border-l-4 border-accent-500 bg-stone-100 p-8">
              <p className="text-lg italic text-text-body">
                Support and strengthen rural communities by providing accessible,
                compassionate, and practical services that foster wellbeing,
                resilience, and connection.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="mt-12">
            <h3 className="font-heading text-3xl font-semibold text-text-primary">
              Our Vision
            </h3>
            <div className="mt-4 rounded-lg border-l-4 border-accent-500 bg-stone-100 p-8">
              <p className="text-lg italic text-text-body">
                Thriving rural communities where every person has access to
                support, relationships, and opportunities to flourish.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h3 className="text-center font-heading text-3xl font-semibold text-text-primary">
              Our Values
            </h3>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.name}
                  className="rounded-lg border border-stone-200 bg-white p-6 text-center shadow-sm transition-all duration-300 ease-premium hover:border-accent-300 hover:shadow-md"
                >
                  <p className="font-heading text-xl font-semibold text-primary-900">
                    {value.name}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why the Name Matters */}
      <section className="bg-primary-900 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-4xl font-semibold text-text-on-dark">
            Why the Name Matters
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* St Katharine */}
            <div className="border-t-2 border-accent-500 pt-6">
              <h3 className="font-heading text-3xl font-semibold text-accent-400">
                St Katharine
              </h3>
              <p className="mt-4 text-base leading-relaxed text-text-on-dark">
                The name St Katharine represents our foundation &mdash; a legacy
                of service, care, and values-based community work. It speaks to
                the deep roots from which this initiative has grown, and the
                enduring commitment to dignity and learning that guides
                everything we do.
              </p>
            </div>

            {/* Rural Connect */}
            <div className="border-t-2 border-accent-500 pt-6">
              <h3 className="font-heading text-3xl font-semibold text-accent-400">
                Rural Connect
              </h3>
              <p className="mt-4 text-base leading-relaxed text-text-on-dark">
                Rural Connect describes our mission &mdash; connecting people to
                services, to neighbours, to support, to opportunities, and to
                the resources they need. It&rsquo;s about closing the gaps that
                rural life can create, and ensuring no one has to face their
                challenges alone.
              </p>
            </div>
          </div>

          {/* Unifying statement */}
          <p className="mx-auto mt-8 max-w-prose text-center text-lg italic text-stone-300">
            Together, the name reflects who we are: a trusted, values-driven
            organisation dedicated to strengthening rural communities through
            genuine connection and care.
          </p>
        </div>
      </section>
    </main>
  );
}
