"use server";

import { contactSchema, type ContactFormState } from "@/lib/schemas/contact";

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    audience: formData.get("audience") as string,
    message: formData.get("message") as string,
    honeypot: formData.get("honeypot") as string,
  };

  // Honeypot check -- reject silently if filled
  // Return fake success so bots cannot detect rejection
  if (raw.honeypot) {
    console.log("[SPAM] Honeypot triggered:", {
      timestamp: new Date().toISOString(),
      name: raw.name,
      email: raw.email,
    });

    return {
      success: true,
      message:
        "Thank you for getting in touch. We'll get back to you as soon as we can.",
    };
  }

  // Server-side validation with the shared zod schema
  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {};

    for (const issue of result.error.issues) {
      const field = issue.path[0] as string;
      if (!fieldErrors[field]) {
        fieldErrors[field] = [];
      }
      fieldErrors[field].push(issue.message);
    }

    return {
      success: false,
      message: "Please check the form below and try again.",
      errors: fieldErrors,
    };
  }

  // Submit to Formspree
  const response = await fetch("https://formspree.io/f/xbdzoywa", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone || "Not provided",
      audience: result.data.audience || "Not specified",
      message: result.data.message,
    }),
  });

  if (!response.ok) {
    return {
      success: false,
      message:
        "Something went wrong sending your message. Please try again, or call us directly.",
    };
  }

  return {
    success: true,
    message:
      "Thank you for getting in touch. We'll get back to you as soon as we can.",
  };
}
