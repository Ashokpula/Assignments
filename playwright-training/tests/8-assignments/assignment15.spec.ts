import { test, expect } from '@playwright/test';

test('assignment15', async ({ page }) => {

    //1. Enter URL and Launch the application
   await page.goto('https://demoqa.com/automation-practice-form');

    console.log('Application is Launcehed');

    //2. Wait for Page-load

 // 2.verify application logo is displayed
    const practiceForm = await page.locator("h1.text-center");
    await expect(practiceForm).toBeVisible();
    console.log("Page is successfully Loaded. ");

   
   //3.Enter First name and Last name 

  const firstName = page.locator("input#firstName");
  const firstNamePlaceHolder = await firstName.getAttribute("placeholder");
  await expect(firstNamePlaceHolder).toBe("First Name");
  await firstName.clear();
  await firstName.fill("Ashok");
   console.log("First name is entered Successfully ");

  const lastName = page.locator("input#lastName");
  const lastNamePlaceHolder = await lastName.getAttribute("placeholder");
  await expect(lastNamePlaceHolder).toBe("Last Name");
  await lastName.clear();
  await lastName.fill("Pula");
  console.log("Last name is entered Successfully ");
 
   //4. Enter Email
  const email = page.locator("input#userEmail");

  const emailPlaceHolder = await email.getAttribute("placeholder");
  await expect(emailPlaceHolder).toBe("name@example.com");
  await email.clear();
  await email.fill("Pulaashok99@gmail.com");
  console.log("Email is entered Successfully ");

   // 5. Select Gender (Male)
   
  await selectGender(page, "Male");


  // 6. Enter mobile number

  const phone = page.locator("input#userNumber");
  const phonePlaceHolder = await phone.getAttribute("placeholder");
  await expect(phonePlaceHolder).toBe("Mobile Number");
  await phone.clear();
  await phone.fill("7075470976");
  console.log("Phone Number  is entered Successfully ");


  // 7.Select DOB (1-Feb-1991)
 const dob = await page.locator('//input[@id="dateOfBirthInput"]');
   await dob.click();
  
//   const dobMonth = await page.locator('select.react-datepicker__month-select');
//   await dobMonth.selectOption({ value: '1'});

//   const dobYear = await page.locator('select.react-datepicker__year-select');
//   await dobYear.selectOption({ value: '1991'});
//   const dobDate =  await page.locator('div.react-datepicker__day--001:not(div.react-datepicker__day--outside-month)');
//   await dobDate.click();
//    const enteredDob = await page.locator('//input[@id="dateOfBirthInput"]').inputValue();
//    await expect(enteredDob).toBe("01 Feb 1991");

   await selectDob(page, "February", "1991", "1");
   //console.log(`"${enteredDob}} is entered Successfully "`);

 //8.Search and Select Computer Science and English

  const subjects = await page.locator("input#subjectsInput");
  await subjects.clear();
  await subjects.fill("English");
  await phone.press('Enter');
  await subjects.fill("Computer Science");
  console.log(`Subjects are entered Successfully "`);
  
  //9. Selecting Hobbies
     
 const hobbies :string[] = ["Sports", "Reading"];
    await selectHobbies(page, hobbies);

  //10.Upload photo

  const imageInput = await page.locator('input[type="file"]');
  await imageInput.setInputFiles('Files/tsscript.png');
  await expect(imageInput).toBeVisible();
  console.log(`"Photo is uploaded Successfully "`);

  // 11.click on submit button

  const submitButton = await page.locator('//button[text()="Submit"]');
  const buttonLabel = await submitButton.textContent();
  await expect(buttonLabel).toBe('Submit');
  await submitButton.click();

  console.log(`"Application is submitted Successfully "`);

  const successMessage = await page.locator("div#example-modal-sizes-title-lg").textContent();
  await expect(successMessage).toBe('Thanks for submitting the form');

});


async function selectGender(page: any, option: string): Promise<void> {
    const gender = await page.locator(`input[value="${option}"]`);
    await gender.click();
    console.log(`Selected  gender is : ${option}`);
}

async function selectDob(page: any, month: string, year : string, date : string ): Promise<void> {

  const dobMonth = await page.locator('select.react-datepicker__month-select');
  await dobMonth.selectOption({label: month})
  //await dobMonth.selectOption({ value: '5'});
  //console.log(dobMonth);
  const dobYear = await page.locator('select.react-datepicker__year-select');   
  await dobYear.selectOption({label : year})
    
  //const dobDate = await page.locator(`input[value='${date}']`);

const dobDate =  await await page.locator(`//div[contains(@aria-label,"${month}") and text()="${date}"]`);
await dobDate.click();
const enteredDob = await page.locator('//input[@id="dateOfBirthInput"]').inputValue();
//await expect(enteredDob).toBe(`"${value}"`);


 console.log(`Selected option for dob is : ${date} ${month} ${year}`);
}

// async function selectHobbies(page: any, option: string): Promise<void> {
//     const hobbiesCheckBox = await page.locator(
//         `//label[text()="${option}"]`);
//     await hobbiesCheckBox.click();
//     console.log(`Selected option from hobbies is : ${option}`);
// }/

async function selectHobbies(page: any, options: string[]): Promise<void> {
    for (const option of options) {
        const hobby = await page.locator(`//label[text()="${option}"]`);
        await hobby.click();
    }
}

////label[text()='Music']/..//input[@type='checkbox']