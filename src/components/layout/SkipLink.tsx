export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-500 focus:text-primary-950 focus:font-body focus:font-medium focus:rounded focus:outline-none focus:ring-2 focus:ring-primary-900"
    >
      Skip to main content
    </a>
  );
}
