
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('successful login using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});
