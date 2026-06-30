import { test, expect } from '@playwright/test';

test('assignment17', async ({ page }) => {

// 1. Enter URL and Launch the application (https://demoqa.com/frames)

await page.goto("https://demoqa.com/frames");

 console.log("Application is successfully launched. ");

// 2. Locate Main window element

const mainWindowElement = await page.locator('//h1[text()="Frames"]');
//Locate the frame and store in the variable
const frame = await page.frameLocator('//iframe[@id="frame1"]');

// 3. Locate Frame Element

const frameElement = await frame.locator('//h1[@id="sampleHeading"]');

// 4. Copy and Print text from frame element

 console.log(await frameElement.textContent());

// 5. Copy and Print text from main window element

console.log(await mainWindowElement.textContent());


     });
