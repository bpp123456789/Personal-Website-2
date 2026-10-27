import { test, expect } from '@playwright/test';

test('theme buttons toggle the class on <html>', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  const options = page.locator('[class*="modeOptions"] button');

  await page.getByRole('button', { name: 'Themes' }).click();

  await options.nth(0).click(); // dark
  await expect(html).toHaveClass(/dark/);

  await options.nth(2).click(); // neopolitan
  await expect(html).toHaveClass(/neopolitan/);
  await expect(html).not.toHaveClass(/dark/);

  await options.nth(1).click(); // icecream (default, no class)
  await expect(html).not.toHaveClass(/dark|neopolitan/);
});
