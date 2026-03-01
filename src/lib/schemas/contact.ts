import { z } from "zod";

export const AUDIENCE_OPTIONS = [
  { value: "farmer", label: "Farmer" },
  { value: "offshore-worker", label: "Offshore Worker" },
  { value: "family", label: "Family Member" },
  { value: "community", label: "Community Member" },
  { value: "other", label: "Other" },
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "We'd like to know what to call you")
    .max(100, "Name must be 100 characters or fewer"),
  email: z
    .string()
    .min(1, "We need your email so we can get back to you")
    .email("Please enter a valid email address so we can reach you"),
  phone: z
    .string()
    .max(20, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  audience: z
    .enum(["farmer", "offshore-worker", "family", "community", "other"])
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(1, "Let us know how we can help")
    .max(5000, "Message must be 5000 characters or fewer"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof ContactFormData]?: string[];
  };
};
