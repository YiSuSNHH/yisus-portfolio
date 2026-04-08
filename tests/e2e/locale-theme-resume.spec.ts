import { expect, test } from "@playwright/test";

test.describe("Locale, theme, and resume flows", () => {
  test.setTimeout(120_000);

  test("switches locale and persists preference", async ({ page }) => {
    await page.goto("/en", { waitUntil: "domcontentloaded" });

    await page.getByRole("button", { name: "VI" }).click();
    await expect(page).toHaveURL(/\/vi(?:\?|$)/);

    await page.reload();
    await expect(page).toHaveURL(/\/vi(?:\?|$)/);

    await page.goto("/", { waitUntil: "domcontentloaded" });
    await expect(page).toHaveURL(/\/(en|vi)(?:\?|$)/);
  });

  test("toggles dark theme from localized controls", async ({ page }) => {
    await page.goto("/en", { waitUntil: "domcontentloaded" });

    await page.getByRole("button", { name: "Use dark theme" }).click();
    await expect(page.locator("html")).toHaveClass(/dark/);

    await page.goto("/vi", { waitUntil: "domcontentloaded" });

    const lightThemeButton = page.getByRole("button", { name: /Dung giao dien sang|Dùng giao diện sáng/ });
    await expect(lightThemeButton).toBeVisible();
    await lightThemeButton.click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);
  });

  test("triggers print action on resume routes", async ({ page }) => {
    await page.goto("/en/resume", { waitUntil: "domcontentloaded" });

    const resumePrintButton = page.getByRole("button", { name: "Print / Save PDF" });
    await expect(resumePrintButton).toBeVisible();
    await resumePrintButton.click({ force: true });

    await page.emulateMedia({ media: "print" });
    await expect(page.locator(".no-print").first()).toBeHidden();
    await page.emulateMedia({ media: "screen" });

    await page.goto("/en/resume/harvard", { waitUntil: "domcontentloaded" });

    const harvardPrintButton = page.getByRole("button", { name: "Print / Save PDF" });
    await expect(harvardPrintButton).toBeVisible();
    await harvardPrintButton.click({ force: true });

    await page.emulateMedia({ media: "print" });
    await expect(page.locator(".no-print").first()).toBeHidden();
    await page.emulateMedia({ media: "screen" });
  });
});
