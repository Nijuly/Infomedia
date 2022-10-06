import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
    protected readonly page: Page;
    readonly logo: Locator;
    readonly popup: Locator;
    readonly popUpAgree: Locator;
    readonly loginButton: Locator;
    readonly loginPopUpMenu: Locator;
    readonly LoginMenuTab: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.logo = page.locator('.logo-wrapper');
        this.popup = page.locator('.didomi-popup__dialog');
        this.popUpAgree = page.locator('#didomi-notice-agree-button');
        this.loginButton = page.locator('[aria-label="Login menu"]');
        this.loginPopUpMenu = page.locator('#cdk-overlay-0');
        this.LoginMenuTab = page.locator('button.app-popup-menu-view__menu__item');
    }

    async goTo() {
        await this.page.goto("https://www.reverso.net");
    }

    async agreePopUp() {
        await this.popup.waitFor();

        if (await this.popup.isVisible() === true) {
            await this.popUpAgree.waitFor()
            await this.popUpAgree.click();
        }
    }

    async clickOnLoginMenuTab(tab: string) {
        const count = await this.LoginMenuTab.count();
        for (let i = 0; i < count; i++) {
            if (this.LoginMenuTab.nth(i), { hasText: `${tab}` }) {
                this.LoginMenuTab.nth(i).click();
                break;
            }
        }
    }
}