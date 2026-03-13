import { test, expect } from '@playwright/test';

test('Open Google and search Playwright', async ({ page }) => {

  await page.goto('https://www.google.com');

  await page.locator('textarea[name="q"]').fill('Playwright automation');

  await page.keyboard.press('Enter');

  await page.waitForTimeout(3000);

  await expect(page).toHaveTitle(/Playwright/);

});