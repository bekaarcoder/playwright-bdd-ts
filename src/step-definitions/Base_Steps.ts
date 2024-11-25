import { When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';

// Load env variable from .env file
import { config as loadEnv } from 'dotenv';
import { CucumberWorld } from './world/CucumberWorld';
import logger from '../logger/logger';
const env = loadEnv({ path: './env/.env' });

// Create a configuration object for easy access to env variables
const config = {
    width: parseInt(env.parsed?.BROWSER_WIDTH || '1920'),
    height: parseInt(env.parsed?.BROWSER_HEIGHT || '1080'),
};

When('I switch to a new browser tab', async function (this: CucumberWorld) {
    await this.basePage.switchToNewTab();
    logger.info(`Page Title: ${await pageFixture.page.title()}`);
});
