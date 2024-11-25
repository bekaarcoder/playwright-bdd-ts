import { Then, When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { CucumberWorld } from './world/CucumberWorld';

When('I type a first name', async function (this: CucumberWorld) {
    await this.contactUsPage.fillFirstName('John');
});

When('I type a last name', async function (this: CucumberWorld) {
    await this.contactUsPage.fillLastName('Doe');
});

When('I enter an email address', async function (this: CucumberWorld) {
    await this.contactUsPage.fillEmailAddress('johndoe@email.com');
});

When('I type a comment', async function (this: CucumberWorld) {
    await this.contactUsPage.fillComment('This is a test');
});

When('I click on the submit button', async function (this: CucumberWorld) {
    await this.contactUsPage.clickOnSubmitButton();
});

Then(
    'I should be presented with a thank you message',
    async function (this: CucumberWorld) {
        const text = await this.contactUsPage.getSuccessfulMessage();
        expect(text).toBe('Thank You for your Message!');
    }
);

Then(
    'I should be presented with error message',
    async function (this: CucumberWorld) {
        const bodyText = await this.contactUsPage.getUnsuccessfulMessage();

        expect(bodyText).toMatch(
            /Error: (all fields are required|Invalid email address)/
        );
    }
);

When(
    'I type {string} as first name',
    async function (this: CucumberWorld, firstName: string) {
        await this.contactUsPage.fillFirstName(firstName);
    }
);

When(
    'I type {string} as last name',
    async function (this: CucumberWorld, lastName: string) {
        await this.contactUsPage.fillLastName(lastName);
    }
);

When(
    'I enter {string} as email address',
    async function (this: CucumberWorld, email: string) {
        await this.contactUsPage.fillEmailAddress(email);
    }
);

When(
    'I type {string} and number {int} in the comments input',
    async function (this: CucumberWorld, comment: string, num: number) {
        await this.contactUsPage.fillComment(`${comment}, ${num}`);
    }
);

When('I type a random first name', async function (this: CucumberWorld) {
    const firstName = faker.person.firstName('male');
    this.setFirstName(firstName);
    await this.contactUsPage.fillFirstName(firstName);
});

When('I type a random last name', async function (this: CucumberWorld) {
    const lastName = faker.person.lastName('male');
    this.setLastName(lastName);
    await this.contactUsPage.fillLastName(lastName);
});

When('I enter a random email address', async function (this: CucumberWorld) {
    // const email = faker.internet.email()
    await this.contactUsPage.fillEmailAddress(
        `${this.getFirstName()}.${this.getLastName()}@email.com`
    );
});

When(
    'I type a first name {word} and a last name {word}',
    async function (this: CucumberWorld, firstName: string, lastName: string) {
        await this.contactUsPage.fillFirstName(firstName);

        await this.contactUsPage.fillLastName(lastName);
    }
);

When(
    'I type an email address {string} and a comment {string}',
    async function (this: CucumberWorld, email: string, comment: string) {
        await this.contactUsPage.fillEmailAddress(email);

        await this.contactUsPage.fillComment(comment);
    }
);

Then(
    'I should be presented with header text {string}',
    async function (this: CucumberWorld, message: string) {
        const foundElementText = await this.contactUsPage.checkForHeaderText(
            message
        );

        expect(foundElementText).toBeTruthy();
    }
);
