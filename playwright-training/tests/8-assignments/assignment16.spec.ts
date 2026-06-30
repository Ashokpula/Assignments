import { test, expect } from '@playwright/test';

test('assignment16', async ({ page }) => {

// 1. Enter URL and Launch the application (https://demoqa.com/alerts)

await page.goto("https://demoqa.com/alerts");

 console.log("Application is successfully launched. ");

// 2. Locate Alert buttons to trigger the alerts

// const alertButton = page.locator('button#alertButton');
// await expect(alertButton).toBeVisible();
console.log("Alert buttons are getting displayed.");

// 3. Click on the information alert and copy the alert message and then select OK button
const infoAlert = page.locator('//button[@id="alertButton"]');
const confAlertButton = page.locator('//button[@id="confirmButton"]');
const promptAlert = page.locator('//button[@id="promtButton"]');

page.once('dialog', async dialog => {
const timerAlertMessage = dialog.message();
console.log(timerAlertMessage);
await dialog.accept();

  });
 
  await infoAlert.click();







// 4. Click on the Confirmation alert, copy the alert message, and select the Cancel button.

page.once('dialog', async dialog => {
const timerAlertMessage = dialog.message();
console.log(timerAlertMessage);
await dialog.dismiss();

  });
 
  await confAlertButton.click();
// 5. Click on the prompt alert. Copy the alert message. Enter text. Then Select OK button.

page.once('dialog', async dialog => {
const timerAlertMessage = dialog.message();
console.log(timerAlertMessage);
await dialog.accept('playwright automation');

  });
 
  await promptAlert.click();


    });