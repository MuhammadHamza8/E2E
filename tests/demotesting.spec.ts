import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  await page.goto('https://demoqa.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEMOQA/);

  console.log("Testing is  working ")
});

test('form filling ',async ({ page }) => {

  await page.goto('https://demoqa.com/text-box');
  await page.waitForTimeout(2000);
  await page.locator('#userName').fill('muhammad Ali');
  await page.locator('#userEmail').fill('hamzaicp54@gmail.com');
  await page.locator('#currentAddress').fill('Pakistan islamabad');
  await page.locator("#permanentAddress").fill('Pakistan');
  await page.waitForTimeout(2000);
  await page.locator('#submit').click()

 const name = await page.locator('#name');
 const email = await page.locator('#email');
 const currentAddress  = await page.locator('textarea#currentAddress');
 const permanentAddress = await page.locator('textarea#permanentAddress');

await expect(name).toBeVisible();
await expect(email).toBeVisible();
await expect(currentAddress).toBeVisible()
await expect(permanentAddress).toBeVisible()

  
});


test('add record in table' , async ({ page }) => {

await page.goto('https://demoqa.com/webtables');

await page.locator('#addNewRecordButton').click();
await page.locator('#firstName').fill('hamza');
await page.locator('#lastName').fill('khan');
await page.locator('#userEmail').fill('hamza@gmail.com');
await page.locator('#age').fill('45');
await page.locator('#salary').fill('120000');
await page.locator('#department').fill('computer science');
await page.waitForTimeout(2000);
await page.locator('#submit').click()


});


