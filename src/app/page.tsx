export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 p-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Typography test */}
        <section className="space-y-4">
          <p className="text-overline font-bold uppercase tracking-widest text-accent-600">
            Our Services
          </p>
          <h1 className="font-heading text-5xl font-semibold text-text-primary">
            St Katharine Rural Connect
          </h1>
          <p className="text-lg text-text-body">
            Support, connection, and care for rural communities.
          </p>
          <p className="text-sm text-text-muted">
            Serving farmers, offshore workers, families, and community members.
          </p>
        </section>

        {/* Color palette test */}
        <section className="space-y-4">
          <h2 className="font-heading text-4xl font-semibold text-text-primary">
            Design Token Verification
          </h2>
          <div className="grid grid-cols-5 gap-2">
            <div className="h-16 rounded bg-primary-950" title="primary-950" />
            <div className="h-16 rounded bg-primary-900" title="primary-900" />
            <div className="h-16 rounded bg-primary-800" title="primary-800" />
            <div className="h-16 rounded bg-primary-700" title="primary-700" />
            <div className="h-16 rounded bg-primary-600" title="primary-600" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="h-16 rounded bg-secondary-700" title="secondary-700" />
            <div className="h-16 rounded bg-secondary-500" title="secondary-500" />
            <div className="h-16 rounded bg-secondary-300" title="secondary-300" />
            <div className="h-16 rounded bg-secondary-100" title="secondary-100" />
          </div>
          <div className="grid grid-cols-6 gap-2">
            <div className="h-16 rounded bg-accent-600" title="accent-600" />
            <div className="h-16 rounded bg-accent-500" title="accent-500" />
            <div className="h-16 rounded bg-accent-400" title="accent-400" />
            <div className="h-16 rounded bg-accent-300" title="accent-300" />
            <div className="h-16 rounded bg-accent-200" title="accent-200" />
            <div className="h-16 rounded bg-accent-100" title="accent-100" />
          </div>
          <div className="grid grid-cols-5 gap-2">
            <div className="h-16 rounded border border-stone-400 bg-stone-50" title="stone-50" />
            <div className="h-16 rounded bg-stone-100" title="stone-100" />
            <div className="h-16 rounded bg-stone-200" title="stone-200" />
            <div className="h-16 rounded bg-stone-300" title="stone-300" />
            <div className="h-16 rounded bg-stone-400" title="stone-400" />
          </div>
        </section>

        {/* Transition test */}
        <section className="space-y-4">
          <h2 className="font-heading text-4xl font-semibold text-text-primary">
            Interaction Test
          </h2>
          <button className="rounded-md bg-primary-900 px-6 py-3 text-sm font-medium text-text-on-dark transition-all duration-300 ease-premium hover:bg-primary-700">
            Primary Button
          </button>
          <div className="ml-4 inline-block rounded-md border-2 border-accent-500 bg-accent-100 px-6 py-3 text-sm font-medium text-accent-600 transition-all duration-300 ease-premium hover:bg-accent-200">
            Accent Element
          </div>
        </section>
      </div>
    </main>
  );
}
