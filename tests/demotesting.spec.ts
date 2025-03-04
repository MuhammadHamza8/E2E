import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  await page.goto('https://demoqa.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEMOQA/);

  console.log("Testing is  working ")
});

test('Click a button and check text', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.click('text=Get started'); // Click the "Get started" button
  await expect(page).toHaveURL(/.*intro/); // Verify the URL changed
});



test('Fill a form and submit', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
    await page.fill('.new-todo', 'Buy Milk');
    await page.keyboard.press('Enter');
    await expect(page.locator('.todo-list li')).toHaveText('Buy Milk');
});
