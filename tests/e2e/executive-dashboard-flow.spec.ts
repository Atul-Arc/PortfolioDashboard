import { expect, test } from '@playwright/test';

test('executive dashboard flow', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('dashboard-shell')).toBeVisible();
  await expect(page.getByTestId('summary-section')).toBeVisible();
  await expect(page.getByTestId('holdings-section')).toBeVisible();
  await expect(page.getByTestId('analytics-section')).toBeVisible();
  await expect(page.getByTestId('risk-section')).toBeVisible();

  await page.setViewportSize({ width: 900, height: 1200 });
  await expect(page.getByTestId('summary-section')).toBeVisible();
});
