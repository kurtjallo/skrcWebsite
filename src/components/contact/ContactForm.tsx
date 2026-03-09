"use client";

import { useActionState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactFormData,
  type ContactFormState,
  AUDIENCE_OPTIONS,
} from "@/lib/schemas/contact";
import { submitContact } from "@/app/contact/_actions/submit-contact";

const INPUT_BASE =
  "mt-1 block w-full rounded-md border border-stone-300 bg-stone-200 px-4 py-3 font-body text-base text-text-primary placeholder:text-text-muted/60 focus:border-accent-500 focus:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-accent-500/30 transition-colors";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      audience: "",
      message: "",
      honeypot: "",
    },
  });

  // Handle server action response -- redirect to thank-you page on success
  useEffect(() => {
    if (state.success && state.message) {
      router.push("/thank-you");
    }
  }, [state, router]);

  // Client-side validation passes, trigger server action submission
  const onSubmit = () => {
    formRef.current?.requestSubmit();
  };

  const hasErrors = !!(state.errors || Object.keys(errors).length > 0);
  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit)(e);
      }}
      className="relative space-y-6"
      noValidate
    >
      {/* Error summary */}
      {hasErrors && (
        <div
          className="rounded-lg border border-error/30 bg-error/10 p-4"
          role="alert"
          aria-live="polite"
        >
          <p className="font-body text-sm font-medium text-error">
            Please check the form below and try again.
          </p>
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block font-body text-sm font-medium text-text-primary"
        >
          Name <span className="text-error">*</span>
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={INPUT_BASE}
          placeholder="Your name"
        />
        {errors.name && (
          <p
            id="name-error"
            className="mt-1.5 font-body text-sm text-error"
            role="alert"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block font-body text-sm font-medium text-text-primary"
        >
          Email <span className="text-error">*</span>
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={INPUT_BASE}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p
            id="email-error"
            className="mt-1.5 font-body text-sm text-error"
            role="alert"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block font-body text-sm font-medium text-text-primary"
        >
          Phone{" "}
          <span className="font-normal text-text-muted">(optional)</span>
        </label>
        <input
          {...register("phone")}
          type="tel"
          id="phone"
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={INPUT_BASE}
          placeholder="Your phone number"
        />
        {errors.phone && (
          <p
            id="phone-error"
            className="mt-1.5 font-body text-sm text-error"
            role="alert"
          >
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Audience */}
      <div>
        <label
          htmlFor="audience"
          className="block font-body text-sm font-medium text-text-primary"
        >
          I am a&hellip;{" "}
          <span className="font-normal text-text-muted">(optional)</span>
        </label>
        <select
          {...register("audience")}
          id="audience"
          autoComplete="off"
          aria-invalid={!!errors.audience}
          aria-describedby={errors.audience ? "audience-error" : undefined}
          className={`${INPUT_BASE} appearance-none bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236B635A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
          }}
        >
          <option value="">Select if you&rsquo;d like&hellip;</option>
          {AUDIENCE_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {errors.audience && (
          <p
            id="audience-error"
            className="mt-1.5 font-body text-sm text-error"
            role="alert"
          >
            {errors.audience.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block font-body text-sm font-medium text-text-primary"
        >
          Message <span className="text-error">*</span>
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          autoComplete="off"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${INPUT_BASE} resize-y`}
          placeholder="How can we help?"
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-1.5 font-body text-sm text-error"
            role="alert"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot -- positioned off-screen to trap bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="honeypot">Leave this empty</label>
        <input
          {...register("honeypot")}
          type="text"
          id="honeypot"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Reassurance */}
      <p className="font-body text-sm text-text-muted">
        Your information is confidential. We will only use it to respond to your
        message.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-primary-900 px-8 py-3.5 font-body text-base font-medium text-text-on-dark transition-all duration-300 ease-premium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
