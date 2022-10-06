import { Locator, Page } from "@playwright/test";

export class ActivationSentPage {
    readonly page: Page;
    readonly message: Locator;

    constructor(page: Page) {
        this.page = page;
        this.message = page.locator('h2.text-center');
    }
}

