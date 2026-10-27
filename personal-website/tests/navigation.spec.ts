import { test, expect } from '@playwright/test';

test('home page shows the heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText("Hi, I'm Billy Petrik");
});

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Leadership', path: '/leadership' },
  { name: 'Resume', path: '/resume' },
];

for (const { name, path } of navLinks) {
  test(`navbar "${name}" link goes to ${path}`, async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name }).click();
    await expect(page).toHaveURL(path);
  });
}

test('active nav link follows the current page', async ({ page }) => {
  await page.goto('/projects');
  const nav = page.getByRole('navigation');
  await expect(nav.getByRole('link', { name: 'Projects' })).toHaveClass(/active/);
  await expect(nav.getByRole('link', { name: 'About' })).not.toHaveClass(/active/);
});
