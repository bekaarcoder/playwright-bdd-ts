import { Page } from '@playwright/test';
import { BasePage } from './base/BasePage';
import logger from '../logger/logger';

export class ContactUsPage extends BasePage {
    public async fillFirstName(firstName: string): Promise<void> {
        await this.page.getByPlaceholder('First Name').fill(firstName);
    }

    public async fillLastName(lastName: string): Promise<void> {
        await this.page.getByPlaceholder('Last Name').fill(lastName);
    }

    public async fillEmailAddress(email: string): Promise<void> {
        await this.page.getByPlaceholder('Email Address').fill(email);
    }

    public async fillComment(comment: string): Promise<void> {
        await this.page.getByPlaceholder('Comments').fill(comment);
    }

    public async clickOnSubmitButton(): Promise<void> {
        await this.waitAndClickSelector('input[value="SUBMIT"]');
    }

    public async getSuccessfulMessage(): Promise<string> {
        await this.page.waitForSelector('#contact_reply h1', {
            timeout: 60000,
        });

        // Get text from the element
        return await this.page.innerText('#contact_reply h1');
    }

    public async getUnsuccessfulMessage(): Promise<string> {
        // wait for the element
        await this.page.waitForSelector('body');

        // Locate the element
        const bodyElement = this.page.locator('body');
        const bodyText = await bodyElement.textContent();
        return bodyText ?? '';
    }

    public async checkForHeaderText(message: string): Promise<boolean> {
        //wait for the target element
        await this.page.waitForSelector(
            '//div[@id="contact_reply"]/h1 | //body',
            { state: 'visible' }
        );

        //get all elements
        const elements = await this.page
            .locator('//div[@id="contact_reply"]/h1 | //body')
            .elementHandles();
        let foundElementText: boolean = false;

        //loop through elements
        for (let element of elements) {
            //get innerText
            let text = await element.innerText();
            logger.info(`Found Text: ${text}`);
            if (text.includes(message)) {
                foundElementText = true;
                break;
            }
        }
        return foundElementText;
    }
}
