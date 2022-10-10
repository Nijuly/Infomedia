import { Locator, Page } from '@playwright/test';

export class HeaderComponent {
    readonly page: Page;
    readonly moreProductsDropdawn: Locator;
    readonly translationLink: Locator;
    readonly contextLink: Locator;
    readonly grammarCheckLink: Locator;
    readonly synonymsLink: Locator;
    readonly conjugationLink: Locator;

    constructor(page: Page) {
        this.moreProductsDropdawn = page.locator('#more-products-menu');
        this.translationLink = page.locator('.translation-link');
        this.contextLink = page.locator('.context-link');
        this.grammarCheckLink = page.locator('.translation-link');
        this.synonymsLink = page.locator('.translation-link');
        this.conjugationLink = page.locator('.translation-link');
    }
}