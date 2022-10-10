import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/RegisterPage';
import { data, url } from '../../fixtures/userRegistrationInvalid/TestData'

test.describe('User registration', () => {

    test('Register user with empty fields', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goTo(url);
        await expect(registerPage.registerForm).toBeVisible();
        await registerPage.registrate(data[0]);
        await expect(registerPage.emailError).toBeVisible();
        await expect(registerPage.emailError).toHaveText(data[0][0]);
        await expect(registerPage.passwordError).toBeVisible();
        await expect(registerPage.passwordError).toHaveText(data[0][1]);
        await expect(registerPage.confirmPasswordError).toBeVisible();
        await expect(registerPage.confirmPasswordError).toHaveText(data[0][2]);
        await expect(registerPage.summaryErrors).toBeVisible();
        await registerPage.checkingSummaryErrors(data[0]);
    });

    for (let set of data) {
        test(`Register user with ${set.testName}`, async ({ page }) => {
            const registerPage = new RegisterPage(page);
            await registerPage.goTo(url);
            await expect(registerPage.registerForm).toBeVisible();
            await registerPage.registrate(set);
            await expect(registerPage.summaryErrors).toBeVisible();
            await registerPage.checkingSummaryErrors(set);
        });
    }
});
