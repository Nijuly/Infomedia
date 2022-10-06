import { Page } from '@playwright/test';

export abstract class BasePage {
    protected readonly page: Page;
    abstract goTo(): Promise<void>;

    constructor(page: Page) {
        this.page = page;
    }
}
