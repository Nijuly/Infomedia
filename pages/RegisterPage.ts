import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from './BasePage';
import { RegisterData } from '../utilities/Interfaces';

export class RegisterPage extends BasePage {
    protected readonly page: Page;
    readonly registerForm: Locator;
    readonly inputEmail: Locator;
    readonly inputPassword: Locator;
    readonly inputConfirmPassword: Locator;
    readonly singUpButton: Locator;
    readonly checkBoxSubscribe: Locator;
    readonly emailError: Locator;
    readonly passwordError: Locator;
    readonly confirmPasswordError: Locator;
    readonly summaryErrors: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.registerForm = page.locator('section form');
        this.inputEmail = page.locator('#Input_Email');
        this.inputPassword = page.locator('#Input_Password');
        this.inputConfirmPassword = page.locator('#Input_ConfirmPassword');
        this.singUpButton = page.locator('.btn-submit');
        this.checkBoxSubscribe = page.locator('#Input_IsSubscribedToNewsletters');
        this.emailError = page.locator('#Input_Email-error');
        this.passwordError = page.locator('#Input_Password-error');
        this.confirmPasswordError = page.locator('#Input_ConfirmPassword-error');
        this.summaryErrors = page.locator('.validation-summary-errors');
    }

    async registrate(data: RegisterData): Promise<void> {
        await this.inputEmail.type(data.email);
        await this.inputPassword.type(data.password);
        await this.inputConfirmPassword.type(data.confirmPassword);
        await this.singUpButton.click();
    }

    async checkingSummaryErrors(data: object): Promise<void> {
        const count: number = await this.summaryErrors.locator('ul li').count();
        for (let i = 0; i < count; i++) {
            await expect(this.summaryErrors.locator('ul li').nth(i)).toHaveText(data[i]);
        }
    }
}