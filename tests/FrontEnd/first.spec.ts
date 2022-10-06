import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Go to main page', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goTo();
    await mainPage.agreePopUp()
    await expect(mainPage.logo).toBeVisible();
});
