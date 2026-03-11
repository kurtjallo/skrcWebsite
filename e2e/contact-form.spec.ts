import { test, expect } from "@playwright/test";

test.describe("Contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("page loads with form visible", async ({ page }) => {
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toContainText("Send Message");
  });

  test("shows validation errors for empty required fields", async ({ page }) => {
    await page.click('button[type="submit"]');

    await expect(page.locator("#name-error")).toBeVisible();
    await expect(page.locator("#email-error")).toBeVisible();
    await expect(page.locator("#message-error")).toBeVisible();
  });

  test("shows error for invalid email", async ({ page }) => {
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="email"]', "not-an-email");
    await page.fill('textarea[name="message"]', "Hello");
    await page.click('button[type="submit"]');

    await expect(page.locator("#email-error")).toBeVisible();
  });

  test("clears validation errors when fields are corrected", async ({ page }) => {
    // Trigger errors
    await page.click('button[type="submit"]');
    await expect(page.locator("#name-error")).toBeVisible();

    // Fill in name and resubmit — name error should clear
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('textarea[name="message"]', "Hello");
    await page.click('button[type="submit"]');

    await expect(page.locator("#name-error")).not.toBeVisible();
    await expect(page.locator("#email-error")).not.toBeVisible();
    await expect(page.locator("#message-error")).not.toBeVisible();
  });

  test("honeypot field is not accessible to users", async ({ page }) => {
    const honeypot = page.locator('input[name="honeypot"]');
    await expect(honeypot).toBeAttached();

    // Honeypot is positioned off-screen and hidden from assistive tech
    const container = page.locator('[aria-hidden="true"]').filter({ has: honeypot });
    await expect(container).toHaveCSS("position", "absolute");
  });

  test("optional fields do not show errors when left empty", async ({ page }) => {
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('textarea[name="message"]', "Hello there.");
    await page.click('button[type="submit"]');

    // Phone and audience are optional — no errors should appear for them
    await expect(page.locator("#phone-error")).not.toBeVisible();
    await expect(page.locator("#audience-error")).not.toBeVisible();
  });

  test("audience dropdown has all options", async ({ page }) => {
    const select = page.locator('select[name="audience"]');
    await expect(select).toBeVisible();

    const options = select.locator("option");
    // Default + 5 audience options
    await expect(options).toHaveCount(6);
  });

  test("form has proper accessibility attributes", async ({ page }) => {
    // Required field indicators
    await expect(page.locator('label[for="name"]')).toContainText("*");
    await expect(page.locator('label[for="email"]')).toContainText("*");
    await expect(page.locator('label[for="message"]')).toContainText("*");

    // Submit and check aria-invalid is set on errored fields
    await page.click('button[type="submit"]');

    await expect(page.locator('input[name="name"]')).toHaveAttribute("aria-invalid", "true");
    await expect(page.locator('input[name="email"]')).toHaveAttribute("aria-invalid", "true");
    await expect(page.locator('textarea[name="message"]')).toHaveAttribute("aria-invalid", "true");
  });
});
