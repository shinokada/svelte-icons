import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	console.log(`Running ${test.info().title}`);
	await page.goto('/');
});

test('index page has expected h1', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Svelte SVG Icon Sets', level: 1 })).toBeVisible();
});

test('index page has expected meta title', async ({ page }) => {
	await expect(page).toHaveTitle('Svelte SVG Icon Sets');
});

test('index page has expected meta description', async ({ page }) => {
	const metaDescription = page.locator('meta[name="description"]');
	await expect(metaDescription).toHaveAttribute('content', 'SVG icon sets for Svelte 4/5/Runes');
});

test('index page has expected meta keywords', async ({ page }) => {
	const metaKeywords = page.locator('meta[name="keywords"]');
	await expect(metaKeywords).toHaveAttribute(
		'content',
		'svelte, runes, svg icons, sveltekit, svg component'
	);
});

test('index page has expected meta og', async ({ page }) => {
	const metaOgTitle = page.locator('meta[property="og:title"]');
	await expect(metaOgTitle).toHaveAttribute('content', 'Svelte Svg Icon Sets');
	const metaOgDescription = page.locator('meta[property="og:description"]');
	await expect(metaOgDescription).toHaveAttribute('content', 'SVG icon sets for Svelte 4/5/Runes');
	const metaOgUrl = page.locator('meta[property="og:url"]');
	await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/');
	const metaOgImage = page.locator('meta[property="og:image"]');
	await expect(metaOgImage).toHaveAttribute(
		'content',
		'https://open-graph-vercel.vercel.app/api/svelte-svg-icons'
	);
});

test('index page has expected meta twitter', async ({ page }) => {
	const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
	await expect(metaTwitterTitle).toHaveAttribute('content', 'Svelte Svg Icon Sets');
	const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
	await expect(metaTwitterDescription).toHaveAttribute(
		'content',
		'SVG icon sets for Svelte 4/5/Runes'
	);
	const metaTwitterImage = page.locator('meta[name="twitter:image"]');
	await expect(metaTwitterImage).toHaveAttribute(
		'content',
		'https://open-graph-vercel.vercel.app/api/svelte-svg-icons'
	);
});
