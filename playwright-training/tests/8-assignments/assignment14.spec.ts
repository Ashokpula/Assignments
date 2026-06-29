
import { test, expect } from '@playwright/test';

test('assignment14', async ({ page }) => {

  // 1. Launch application using url

  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  // 2.verify application logo is displayed
  
  await expect(page.locator('img.logo')).toBeVisible();
  
  //3.Verify application caption displayed as "Experience the difference"

  
  await expect(page.locator('//p[text()="Experience the difference"]')).toBeVisible();
  
  //4.Enter invalid username

  //
  const username = page.locator("input[name='username']");

  await username.clear();
  await username.fill("ashoktest");
  await username.press('Enter');
  await username.press('Control+A');
 // const text = await username.getAttribute('value');
  //await expect(text).toBe("ashoktest");
 // 5.Enter empty Password
  //6.Click on login button

  const loginButton = page.locator('input.button');
  //const buttonLabel = await loginButton.textContent();
  const buttonLabelValue = await loginButton.getAttribute('value');
  await expect(buttonLabelValue).toBe('Log In');
  await loginButton.click();

 // 7.Verify the error message "Please enter a username and password."

  //const errorMessage = page.locator('//p[text()="Please enter a username and password."]');
  await expect(page.locator('//p[text()="Please enter a username and password."]')).toBeVisible();
  
 // 8.Click on admin page link
  const adminPageLink = page.locator('//ul[@class="leftmenu"]//li//a[text()="Admin Page"]');
  await adminPageLink.click();
 // 9.select the option "soap" from dba mode radio button

  const soapRadio = page.locator("//input[@value='soap']");
  await soapRadio.click();
  await soapRadio.check();

  //10.Scroll to element dropdown
  //11.Select the option web service from the dropdown

  const loanProviderDropDown = page.locator('select#loanProvider');   
  await loanProviderDropDown.selectOption({ index: 1 });
   
  const selectedOption = await loanProviderDropDown.inputValue();
  await expect(selectedOption).toBe("ws");

 // 12.click on submit button

  const submitButton = page.locator('input[value=Submit]');
  //const buttonLabel = await loginButton.textContent();
  const submitButtonLabelValue = await submitButton.getAttribute('value');
  await expect(submitButtonLabelValue).toBe('Submit');
  await submitButton.click();

  // 13.verify submission is successful by validating success message

await expect(page.locator('//p//b[text()="Settings saved successfully."]')).toBeVisible();
  
// 14.Click on services page link

const sevicesPageLink = page.locator('//ul[@class="leftmenu"]//li//a[text()="Services"]');
  await sevicesPageLink.click();
  
//15.wait for service page
const bookstoreServices = await page.locator('//span[text()="Bookstore services:"]');
    await expect(bookstoreServices).toBeVisible();
    console.log("Bookstore services section is visible. ");
//16.Scroll down till bookstore services table

await expect(page.locator('//span[text()="Available Bookstore SOAP services:"]')).toBeVisible();
await bookstoreServices.scrollIntoViewIfNeeded();

// 17.get total rows of books store services table
    const rows = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr');
    const totalRows =await rows.count();

    // 18.get total columns of books store services table
    const columns = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr[1]//td')
    const totalColumns = await columns.count();
   
    // 19.Print table data (row wise and column wise data)
    for(let r:number = 1; r<=totalRows ;r++){
        for(let c:number=1; c<=totalColumns ;c++){
            const cell = await page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr[${r}]//td[${c}]`);
            const cellData = await cell.textContent();
            console.log(`Row ${r} Column ${c} data is : ${cellData}`);
        }
    }



});


async function selectAccessMode(page: any, option: string): Promise<void> {
    const gender = await page.locator(`input[value="${option}"]`);
    await gender.click();
    console.log(`Selected option from dba mode radio button is : ${option}`);
}