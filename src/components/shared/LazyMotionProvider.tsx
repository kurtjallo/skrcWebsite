"use client";

import { LazyMotion, domAnimation } from "motion/react";

/**
 * Global LazyMotion provider that loads the domAnimation feature set.
 * Tree-shakes Motion from ~60KB to ~15KB by only loading DOM animation features.
 * Wraps the app in the root layout so all child motion components can use `m` instead of `motion`.
 */
export function LazyMotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
