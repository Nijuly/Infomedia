import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/RegisterPage';
import { ActivationSentPage } from '../../pages/ActivationSentPage';
import { FakeMale } from '../../utilities/fakeMail';
import { data, url, text } from '../../fixtures/userRegistrationValid/TestData'

test.describe('User registration', () => {

    test('Register user', async ({ page }) => {
        const fakemail = new FakeMale(page);
        let mail: string | null = await fakemail.getFakeMail();
        data.email = `${mail}`;
        const registerPage = new RegisterPage(page);
        const activationSentPage = new ActivationSentPage(page);
        await registerPage.goTo(url);
        await expect(registerPage.registerForm).toBeVisible();
        await registerPage.registrate(data);
        await expect(activationSentPage.message).toHaveText(text);
    });
});

