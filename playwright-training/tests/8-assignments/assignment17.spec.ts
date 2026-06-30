import { test, expect } from '@playwright/test';

test('assignment17', async ({ page }) => {

// 1. Enter URL and Launch the application (https://demoqa.com/frames)

await page.goto("https://demoqa.com/frames");

 console.log("Application is successfully launched. ");

// 2. Locate Main window element
// Locate the frame and store in the variable
const mainFrameElement = page.frameLocator('//div[@id="frame1Wrapper"]');
const frameElement = await mainFrameElement.locator('iframe#frame1');

// 3. Locate Frame Element
// 4. Copy and Print text from frame element
// 5. Copy and Print text from main window element
     });
