import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';
import { RegisterPage } from '../../pages/RegisterPage';

test('Go to Login page', async ({ page }) => {
    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    await mainPage.goTo();
    await mainPage.agreePopUp()
    await expect(mainPage.logo).toBeVisible();
    await mainPage.loginButton.click();
    await expect(mainPage.loginPopUpMenu).toBeVisible();
    await mainPage.clickOnLoginMenuTab('Log in');
    await expect(registerPage.registerForm).toBeVisible();
});
