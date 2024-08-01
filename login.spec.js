import {test, expect} from '@playwright/test'

test('Login valid credentials', async ({ page }) => {
    await page.goto('https://www.zomato.com/');
    await page.getByLabel('navbar').getByText('Log in').click();
    await page.frameLocator('#auth-login-ui').getByLabel('Continue with Email').click();
    await page.frameLocator('#auth-login-ui').getByRole('textbox').fill('charoohimani@gmail.com');
    await page.frameLocator('#auth-login-ui').getByRole('button', { name: 'Send One Time Password' }).click();

    await expect(page.frameLocator('#auth-login-ui').getByRole('heading', { name: 'OTP Verification' })).toBeVisible();
})

test('Login invalid credentials', async ({ page }) => {
    await page.goto('https://www.zomato.com/');
    await page.getByLabel('navbar').getByText('Log in').click();
    await page.frameLocator('#auth-login-ui').getByLabel('Continue with Email').click();
    await page.frameLocator('#auth-login-ui').getByRole('textbox').fill('***random***');
    await page.frameLocator('#auth-login-ui').getByRole('button', { name: 'Send One Time Password' }).click();
    
    await expect(page.frameLocator('#auth-login-ui').getByText('Invalid Email id')).toBeVisible();
})


