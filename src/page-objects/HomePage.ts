import { Locator, Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class HomePage extends BasePage {
    // locators
    private get contactUsLink(): Locator {
        return this.page.getByRole('link', {
            name: 'CONTACT US Contact Us Form',
        });
    }

    // Specific methods for the HomePage
    public async clickOnContactUsLink(): Promise<void> {
        // await this.waitAndClickByRole('link', 'CONTACT US Contact Us Form');
        await this.waitAndClick(this.contactUsLink);
    }

    public async clickOnLoginPortalLink(): Promise<void> {
        await this.waitAndClickByRole('link', 'LOGIN PORTAL Login Portal Are');
    }
}
