import { CucumberWorld } from './world/CucumberWorld';
import { Given, When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import logger from '../logger/logger';

const url = 'https://www.webdriveruniversity.com/';

Given(
    'I navigate to webdriveruniversity homepage',
    async function (this: CucumberWorld) {
        // await pageFixture.page.goto(url);
        console.log('URL: ', url);
        this.setUrl(url);
        await this.homePage.navigate(url);
        logger.info(`Accessing URL: ${url}`);
        logger.info(`Page Title: ${await pageFixture.page.title()}`);
    }
);

When('I click on the contact us button', async function (this: CucumberWorld) {
    // const contactUs_Button = pageFixture.page.getByRole('link', {
    //     name: 'CONTACT US Contact Us Form',
    // });
    // await contactUs_Button.click();
    await this.homePage.clickOnContactUsLink();
});

When('I click on the login portal link', async function (this: CucumberWorld) {
    // const loginPortal_Link = pageFixture.page.getByRole('link', {
    //     name: 'LOGIN PORTAL Login Portal Are',
    // });
    // await loginPortal_Link.click();
    await this.homePage.clickOnLoginPortalLink();
});
