import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/RegisterPage';
import { ActivationSentPage } from '../../pages/ActivationSentPage';
import { FakeMale } from '../../utilities/fakeMail';

test.describe('User registration', () => {

    test('Register user', async ({ page }) => {
        const fakemail = new FakeMale(page);
        let mail = await fakemail.getFakeMail();
        const data = {
            email: `${mail}`,
            password: 'Wsxcjfh4735',
            confirmPassword: 'Wsxcjfh4735'
        }
        const registerPage = new RegisterPage(page);
        const activationSentPage = new ActivationSentPage(page);
        await registerPage.goTo();
        await expect(registerPage.registerForm).toBeVisible();
        await registerPage.registrate(data);
        await expect(activationSentPage.message).toHaveText('Check your inbox to activate your account');
    });
});

