import { Page, Locator } from '@playwright/test';
import { pageFixture } from './../../step-definitions/hooks/browserContextFixture';

// Load env variable from .env file
import { config as loadEnv } from 'dotenv';
const env = loadEnv({ path: './env/.env' });

// Create a configuration object for easy access to env variables
const config = {
    width: parseInt(env.parsed?.BROWSER_WIDTH || '1920'),
    height: parseInt(env.parsed?.BROWSER_HEIGHT || '1080'),
};

export class BasePage {
    get page(): Page {
        return pageFixture.page;
    }

    public async navigate(url: string): Promise<void> {
        console.log('URL BASEPAGE: ', url);
        await this.page.goto(url);
    }

    public async waitAndClickByRole(role: string, name: string): Promise<void> {
        const element = this.page.getByRole(role as any, { name: name });
        await element.click();
    }

    public async waitAndClick(locator: Locator): Promise<void> {
        await locator.isVisible();
        await locator.click();
    }

    public async waitAndClickSelector(selector: string): Promise<void> {
        await this.page.waitForSelector(selector);
        await this.page.click(selector);
    }

    public async switchToNewTab(): Promise<void> {
        await this.page.context().waitForEvent('page');

        // Retrieve all current open tabs
        const allPages = this.page.context().pages();

        // Assign the most recent tab to pageFixture.page
        pageFixture.page = allPages[allPages.length - 1];

        // Make the recent tab active
        await this.page.bringToFront();

        // Ensure the tab is also fully maximized
        await this.page.setViewportSize({
            width: config.width,
            height: config.height,
        });
    }
}
