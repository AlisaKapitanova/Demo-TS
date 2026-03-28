import { test, expect } from '@playwright/test';
import user from '../data/elements.json';


test.describe ('elements', () => {
    
test('elements: Text Box', async ({ page }) => {

    const userNameInput = page.locator('#userName');
    const email = page.locator('#userEmail');
    const adress = page.locator('#currentAddress');
    const output = page.locator('#output');
    const outputName = page.locator('#name');
    const outputEmail = page.locator('#email');
    const outputAdress = page.locator(' #output #currentAddress');
    
    await page.goto('/');
    await page.getByText('Elements').click();
    await page.getByText('Text Box').click();
    await userNameInput.fill(user.fullName);
    await email.fill(user.email);
    await adress.fill(user.adress);
    await page.locator('#submit').click();

    await expect(output).toBeVisible();
    await expect(outputName).toContainText(user.fullName);
    await expect(outputAdress).toContainText(user.adress);
    await expect(outputEmail).toContainText(user.email);
});

test ('elements: checkBox', async ({page}) => {
    await page.goto("/");
    await page.getByText('Elements').click();
    await page.getByText('Check Box').click();
    await page.locator('.rct-checkbox').click();

    await expect(page.locator('#result')).toBeVisible();
})

test('elements: Radio Button', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.getByText('Elements').click();
    await page.getByText('Radio Button').click();
    await page.locator('label:has-text("Yes")').click();
    
    const resultMessage  = page.locator('.mt-3');
    await expect(resultMessage).toBeVisible();
    await expect(resultMessage).toContainText('You have selected Yes');
    
    // Verify the text color is green
    const resultMessageYes = page.locator('.mt-3 .text-success');
    await expect(resultMessageYes).toHaveCSS('color', 'rgb(40, 167, 69)'); // Bootstrap success green color
});

test('elements: Web Tables', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.getByText('Elements').click();
    await page.getByText('Web Tables').click();
    await page.locator('#addNewRecordButton').click();
    await page.locator('#id="firstName"').fill(user.FirstName);
    await page.locator('id="lastName"').fill(user.LastName);
    



});