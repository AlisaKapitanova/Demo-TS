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

})
