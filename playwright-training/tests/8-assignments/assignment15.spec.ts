import { test, expect } from '@playwright/test';

test('assignment15', async ({ page }) => {

    //1. Enter URL and Launch the application

    //2. //Wait for Page-load

 await page.goto('https://demoqa.com/automation-practice-form');

   
   //3.Enter First name and Last name

 

  const firstName = page.locator("input#firstName");

  const firstNamePlaceHolder = await firstName.getAttribute("placeholder");
  await expect(firstNamePlaceHolder).toBe("First Name");
  await firstName.clear();
  await firstName.fill("Ashok");
  await firstName.press('Enter');
  await firstName.press('Control+A');
  //const text = await await firstName.getAttribute("text");
  //await expect(text).toBe("Ashok");

   const lastName = page.locator("input#lastName");

  const lastNamePlaceHolder = await lastName.getAttribute("placeholder");
  await expect(lastNamePlaceHolder).toBe("Last Name");
  await lastName.clear();
  await lastName.fill("Pula");
  await lastName.press('Enter');
  await lastName.press('Control+A');
  //const text = await await lastName.getAttribute("text");
  //await expect(text).toBe("Ashok");
 
   //4. Enter Email
  const email = page.locator("input#userEmail");

  const emailPlaceHolder = await email.getAttribute("placeholder");
  await expect(emailPlaceHolder).toBe("name@example.com");
  await email.clear();
  await email.fill("Pulaashok99@gmail.com");
  await email.press('Enter');
  await email.press('Control+A');

   // 5. Select Gender (Male)
   const genderRadio = page.locator("//input[@value='Male']");
  await genderRadio.click();
  await genderRadio.check();

  // 6. Enter mobile number

  const phone = page.locator("input#userNumber");

  const phonePlaceHolder = await phone.getAttribute("placeholder");
  await expect(phonePlaceHolder).toBe("Mobile Number");
  await phone.clear();
  await phone.fill("7075470976");
  await phone.press('Enter');
  await phone.press('Control+A');

  // 7.Select DOB (1-Feb-1991)

  //const dob = page.locator("div.form-control react-datepicker-ignore-onclickoutside");
  //await expect(dob).toBeVisible();
  
  //await dob.click();
  //const dobMonth = page.locator('select#react-datepicker__month-select');   
  //await dobMonth.selectOption({ index: 1 });

 // const dobYear = page.locator('select#react-datepicker__year-select');   
  //await dobYear.selectOption({ value : '1991' });
   
  //const dobYear = await loanProviderDropDown.inputValue();
  //await expect(selectedOption).toBe("ws");


  //8.Search and Select Computer Science and English


  const subjects = page.locator("input#subjectsInput");
  await subjects.clear();
  await subjects.fill("English");
  await phone.press('Enter');
  await subjects.fill("Computer Science");
  await phone.press('Enter');

  //Select Hobbies as Sports and Reading

   //const hobbiesSports = page.locator('//label[text()="Sports"]//..//input[@type="checkbox"]');
   //const isChecked = await hobbiesSports.isChecked();
   //  if (!isChecked) {
    //      await hobbiesSports.check();
  //   }

   //const hobbiesReading = page.locator("//label[text()='Reading']//..//input[@type='checkbox']");
  //await hobbiesReading.check();

  //10.Upload photo

  const imageInput = await page.locator('input[type="file"]')
  await imageInput.setInputFiles('C:/Ashok_Phone/tsscript.png');

  await expect(imageInput).toBeVisible();

  // 11.click on submit button

  const submitButton = page.locator('//button[text()="Submit"]');
  const buttonLabel = await submitButton.textContent();
  //const submitButtonLabelValue = await submitButton.getAttribute('value');
  await expect(buttonLabel).toBe('Submit');
  await submitButton.click();



   




    });

