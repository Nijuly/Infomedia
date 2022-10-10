import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly loginForm: Locator;
    readonly inputEmail: Locator;
    readonly inputPassword: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginForm = page.locator('#account');
        this.inputEmail = page.locator('#Email');
        this.inputPassword = page.locator('#Password');
        this.loginButton = page.locator('.btn-submit');
    }

    async login(email: string, password: string): Promise<void> {
        await this.inputEmail.type(email);
        await this.inputPassword.type(password);
        await this.loginButton.click();
    }
}