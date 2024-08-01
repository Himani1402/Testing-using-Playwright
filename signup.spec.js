import {test, expect} from '@playwright/test'

test('Signup valid credentials', async ({ page }) => {
    await page.goto('https://www.zomato.com/');
    await page.getByLabel('navbar').getByText('Sign up').click();
    await page.locator('section').filter({hasText: /^Full Name$/})
        .getByRole('textbox').fill('Charoo Himani');
    await page.getByRole('dialog').locator('section').filter({hasText: /^Email$/})
        .getByRole('textbox').fill('charoohimani@gmail.com');
    await page.getByLabel('', {exact: true}).check();
    await page.getByRole('button', {name: 'Create account'}).click();

    // await expect(page.getByText('Enter OTPcross')).toBeVisible();
 })


 test('Signup invalid name', async ({ page }) => {
    await page.goto('https://www.zomato.com/');
    await page.getByLabel('navbar').getByText('Sign up').click();
    await page.locator('section').filter({hasText: /^Full Name$/})
        .getByRole('textbox').fill('abc***');
    await page.getByRole('dialog').locator('section').filter({hasText: /^Email$/})
        .getByRole('textbox').fill('charoohimani@gmail.com');
    await page.getByLabel('', {exact: true}).check();
    await page.getByRole('button', {name: 'Create account'}).click();

    await expect(page.getByRole('heading', { name: 'Signup Failed' })).toBeVisible();
 })


