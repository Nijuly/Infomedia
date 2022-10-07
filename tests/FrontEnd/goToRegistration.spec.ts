import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Go to registration', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goTo();
    await mainPage.agreePopUp()
    await expect(mainPage.logo).toBeVisible();
    await mainPage.loginButton.click();
    await expect(mainPage.loginPopUpMenu).toBeVisible();
    await mainPage.clickOnLoginMenuTab('Register');
    await expect(page).toHaveURL(/.*account.reverso.net*/);
});
