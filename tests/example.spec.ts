import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  console.log("Testing is  working ")
});

test('getlink', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  await page.click('text="Get started"');

  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();


  console.log("Testing is  working ")
});


test('checking writing test', async ({ page }) => {

  await page.goto('https://playwright.dev/');
  
  await page.click('text="Get started"');

  await page.click('text="Writing tests"');

  await expect(page.getByRole('heading', { name: 'Writing tests' })).toBeVisible();


  console.log("Testing is  working ")
});

test('click', async({page}) => {

await page.goto('https://playwright.dev/');

await page.click('text="Get started"');

await page.click('text="How to install Playwright"')

await expect(page.getByRole('heading', { name: 'Installing Playwright' })).toBeVisible();


});