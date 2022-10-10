import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';
import { data } from '../../fixtures/goToRegistration/TestData';

test('Go to registration', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goTo(data.url);
    await mainPage.agreePopUp();
    await expect(mainPage.logo).toBeVisible();
    await mainPage.loginButton.click();
    await expect(mainPage.loginPopUpMenu).toBeVisible();
    await mainPage.clickOnLoginMenuTab(data.tabName);
    await expect(page).toHaveURL(data.newPageName);
});
