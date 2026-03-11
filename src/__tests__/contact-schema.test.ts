import { describe, it, expect } from "vitest";
import { contactSchema } from "@/lib/schemas/contact";

const validData = {
  name: "James McTavish",
  email: "james@example.com",
  phone: "",
  audience: "",
  message: "I need help with my farm.",
  honeypot: "",
};

describe("contactSchema", () => {
  // --- Happy path ---

  it("accepts valid required fields only", () => {
    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("accepts all fields filled", () => {
    const result = contactSchema.safeParse({
      ...validData,
      phone: "01234 567890",
      audience: "farmer",
    });
    expect(result.success).toBe(true);
  });

  it("accepts all audience values", () => {
    const audiences = ["farmer", "offshore-worker", "family", "community", "other"];
    for (const audience of audiences) {
      const result = contactSchema.safeParse({ ...validData, audience });
      expect(result.success).toBe(true);
    }
  });

  it("accepts optional phone and audience as undefined", () => {
    const { phone, audience, ...rest } = validData;
    const result = contactSchema.safeParse(rest);
    expect(result.success).toBe(true);
  });

  // --- Name validation ---

  it("rejects empty name", () => {
    const result = contactSchema.safeParse({ ...validData, name: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      const nameError = result.error.issues.find((i) => i.path[0] === "name");
      expect(nameError?.message).toBe("We'd like to know what to call you");
    }
  });

  it("rejects name over 100 characters", () => {
    const result = contactSchema.safeParse({
      ...validData,
      name: "A".repeat(101),
    });
    expect(result.success).toBe(false);
  });

  it("accepts name at exactly 100 characters", () => {
    const result = contactSchema.safeParse({
      ...validData,
      name: "A".repeat(100),
    });
    expect(result.success).toBe(true);
  });

  // --- Email validation ---

  it("rejects empty email", () => {
    const result = contactSchema.safeParse({ ...validData, email: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      const emailError = result.error.issues.find((i) => i.path[0] === "email");
      expect(emailError?.message).toBe(
        "We need your email so we can get back to you"
      );
    }
  });

  it("rejects invalid email format", () => {
    const invalidEmails = ["notanemail", "missing@", "@nodomain", "spaces in@email.com"];
    for (const email of invalidEmails) {
      const result = contactSchema.safeParse({ ...validData, email });
      expect(result.success).toBe(false);
    }
  });

  it("accepts valid email formats", () => {
    const validEmails = ["user@example.com", "name+tag@domain.co.uk", "a@b.cc"];
    for (const email of validEmails) {
      const result = contactSchema.safeParse({ ...validData, email });
      expect(result.success).toBe(true);
    }
  });

  // --- Phone validation ---

  it("rejects phone over 20 characters", () => {
    const result = contactSchema.safeParse({
      ...validData,
      phone: "1".repeat(21),
    });
    expect(result.success).toBe(false);
  });

  it("accepts phone at exactly 20 characters", () => {
    const result = contactSchema.safeParse({
      ...validData,
      phone: "1".repeat(20),
    });
    expect(result.success).toBe(true);
  });

  // --- Message validation ---

  it("rejects empty message", () => {
    const result = contactSchema.safeParse({ ...validData, message: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      const msgError = result.error.issues.find((i) => i.path[0] === "message");
      expect(msgError?.message).toBe("Let us know how we can help");
    }
  });

  it("rejects message over 5000 characters", () => {
    const result = contactSchema.safeParse({
      ...validData,
      message: "A".repeat(5001),
    });
    expect(result.success).toBe(false);
  });

  it("accepts message at exactly 5000 characters", () => {
    const result = contactSchema.safeParse({
      ...validData,
      message: "A".repeat(5000),
    });
    expect(result.success).toBe(true);
  });

  // --- Honeypot ---

  it("rejects non-empty honeypot (bot detection)", () => {
    const result = contactSchema.safeParse({
      ...validData,
      honeypot: "i am a bot",
    });
    expect(result.success).toBe(false);
  });

  it("accepts empty honeypot", () => {
    const result = contactSchema.safeParse({ ...validData, honeypot: "" });
    expect(result.success).toBe(true);
  });

  // --- Invalid audience ---

  it("rejects invalid audience value", () => {
    const result = contactSchema.safeParse({
      ...validData,
      audience: "alien",
    });
    expect(result.success).toBe(false);
  });
});
