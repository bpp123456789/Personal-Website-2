import { test, expect } from '@playwright/test';
import projects from '../app/_data/projects.json';

test('projects page lists every project from the data file', async ({ page }) => {
  await page.goto('/projects');
  await expect(page.locator('main a[href^="/projects/"]')).toHaveCount(projects.length);
});

for (const p of projects) {
  test(`project "${p.name}" detail page loads`, async ({ page }) => {
    await page.goto('/projects');
    await page.getByRole('main').getByRole('link', { name: p.name }).click();
    await expect(page).toHaveURL(`/projects/${p.id}`);
    await expect(page.getByRole('heading', { name: p.name })).toBeVisible();
  });
}

test('unknown project id shows a 404', async ({ page }) => {
  const response = await page.goto('/projects/9999');
  expect(response?.status()).toBe(404);
});
