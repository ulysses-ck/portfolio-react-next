import { test, expect } from "@playwright/test";

test("light theme by default", async ({ page }) => {
	await page.goto("/");

	// get html classes and see if its changing to "dark"
	const html = await page.$("html");
	const htmlClasses = await html?.getAttribute("class");
	expect(htmlClasses).toContain("light");
});

test("change from system to light", async ({ page }) => {
	await page.goto("/");

	// get ThemeSwitcher button of the page
	const themeSwitcherButton = await page.waitForSelector(
		'button[name="theme-switcher-desktop"]',
		{ timeout: 30000 },
	);

	// change from system to light
	await themeSwitcherButton.click();

	// get html classes and see if its changing to "light"
	const html = await page.$("html");
	const htmlClasses = await html?.getAttribute("class");
	expect(htmlClasses).toContain("light");
});

test("change to dark", async ({ page }) => {
	await page.goto("/");

	// get ThemeSwitcher button of the page
	const themeSwitcherButton = await page.waitForSelector(
		'button[name="theme-switcher-desktop"]',
		{ timeout: 30000 },
	);

	// change from system to light
	await themeSwitcherButton.click();
	// change from light to dark
	await themeSwitcherButton.click();

	// get html classes and see if its changing to "dark"
	const html = await page.$("html");
	const htmlClasses = await html?.getAttribute("class");
	expect(htmlClasses).toContain("dark");
});
