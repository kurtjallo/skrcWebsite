"use client";

import { useState, useRef } from "react";
import { m, useReducedMotion } from "motion/react";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Newsletter() {
  const shouldReduceMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const honeypotRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot check -- silently ignore bot submissions
    if (honeypotRef.current?.value) {
      setStatus("success");
      setEmail("");
      return;
    }

    if (!email || !isValidEmail(email)) {
      setStatus("error");
      return;
    }

    // TODO: Connect to email service (Mailchimp, ConvertKit, etc.)
    setStatus("success");
    setEmail("");
  }

  return (
    <section className="bg-stone-50 py-16 md:py-24" aria-label="Newsletter signup">
        <m.div
          className="mx-auto max-w-2xl px-4 text-center"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="mb-4 font-heading text-4xl font-semibold text-text-primary">
            Stay in the Loop
          </h2>
          <p className="mb-8 text-text-muted">
            Get updates on events, workshops, and community news delivered to
            your inbox. No spam, just the good stuff.
          </p>

          <form
            onSubmit={handleSubmit}
            aria-label="Newsletter signup"
            className="mx-auto max-w-lg"
          >
            <div className="flex flex-col sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-base text-text-body placeholder:text-text-muted focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500 sm:rounded-l-lg sm:rounded-r-none"
              />

              {/* Honeypot field -- invisible to humans */}
              <input
                ref={honeypotRef}
                type="text"
                name="website"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <button
                type="submit"
                className="mt-3 rounded-lg bg-accent-500 px-8 py-3 font-medium text-primary-950 transition-colors duration-300 hover:bg-accent-400 sm:mt-0 sm:rounded-l-none sm:rounded-r-lg"
              >
                Subscribe
              </button>
            </div>

            {/* Status messages */}
            <div aria-live="polite" className="mt-4 min-h-[1.5rem]">
              {status === "success" && (
                <p className="text-sm text-success">
                  Thanks for subscribing! We&apos;ll be in touch.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-error">
                  Please enter a valid email address.
                </p>
              )}
            </div>
          </form>
        </m.div>
      </section>
  );
}
