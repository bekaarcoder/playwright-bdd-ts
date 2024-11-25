import { Page } from '@playwright/test';

// Load env variable from .env file
import { config as loadEnv } from 'dotenv';
const env = loadEnv({ path: './env/.env' });

export function setGlobalSettings(page: Page) {
    const navigationTimeout = parseInt(
        env.parsed?.UI_AUTOMATION_NAVIGATION_TIMEOUT || '50000'
    );
    const commandTimeout = parseInt(
        env.parsed?.UI_AUTOMATION_COMMAND_TIMEOUT || '30000'
    );
    // Set Global navigation timeout
    page.setDefaultNavigationTimeout(navigationTimeout); // wait up to 50 secs

    // Set global command timeout
    page.setDefaultTimeout(commandTimeout); // wait up to 30 secs
}

// Override global 'navigation' timeout - Example
// await page.goto('https://www.example.com', {timeout: 60000})

// Override global 'command' timeout - Example
// await page.click('#button', {timeout: 60000})

// Cucumber timeout value is always HIGHER
