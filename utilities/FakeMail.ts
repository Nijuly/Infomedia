import { Locator, Page } from '@playwright/test';

export class FakeMale {
    readonly page: Page;
    readonly mail: Locator;
    readonly getMailButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getMailButton = page.locator('input.mail_butt')
        this.mail = page.locator('div#email-address');
    }

    async goTo() {
        await this.page.goto("https://www.moakt.com");
    }

    async getFakeMail() {
        await this.goTo();
        await this.getMailButton.click();
        return await this.mail.textContent();
    }
}