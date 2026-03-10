"use client";

import { m, useReducedMotion } from "motion/react";

const PREMIUM_EASE = [0.25, 0.1, 0.25, 1] as const;

export default function FoundingPrayer() {
    const shouldReduceMotion = useReducedMotion();
    const noMotion = { opacity: 1, y: 0 };

    return (
        <section
            className="bg-stone-100 py-20 md:py-32 relative overflow-hidden"
            aria-labelledby="founding-prayer-title"
        >
            <div className="mx-auto max-w-4xl px-4 relative z-10 text-center">
                {/* Subtle decorative overline */}
                <m.p
                    className="mb-8 text-overline font-bold uppercase tracking-widest text-accent-600"
                    initial={shouldReduceMotion ? noMotion : { opacity: 0, y: 10 }}
                    whileInView={shouldReduceMotion ? noMotion : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                >
                    Our Foundation
                </m.p>

                <m.blockquote
                    className="font-heading text-2xl md:text-3xl lg:text-4xl text-text-primary leading-tight md:leading-snug italic"
                    initial={shouldReduceMotion ? noMotion : { opacity: 0, y: 20 }}
                    whileInView={shouldReduceMotion ? noMotion : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: PREMIUM_EASE, delay: shouldReduceMotion ? 0 : 0.1 }}
                >
                    <p className="mb-6">
                        &ldquo;Lord, bless this space. May these walls hold laughter. May these tables hold learning. May these sofas hold rest. May these floors carry music, language, and new friendships.
                    </p>
                    <p className="mb-6">
                        May farm workers find dignity here. May employers find wisdom here. May partners find alignment here. May no one feel invisible here.
                    </p>
                    <p className="mb-6">
                        Protect this space from division, from burnout, from financial instability, and from mission drift. Let St. Katharine Rural Connect be rooted in justice and compassion.
                    </p>
                    <p className="font-semibold not-italic">
                        And may this community space be known not for its branding, but for its belonging. Amen.&rdquo;
                    </p>
                </m.blockquote>

                {/* Small gold line underneath */}
                <m.div
                    className="mx-auto mt-12 h-[2px] bg-accent-500"
                    initial={shouldReduceMotion ? { width: 40 } : { width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={
                        shouldReduceMotion
                            ? { duration: 0 }
                            : { duration: 0.8, ease: PREMIUM_EASE, delay: 0.3 }
                    }
                    aria-hidden="true"
                />
            </div>
        </section>
    );
}
