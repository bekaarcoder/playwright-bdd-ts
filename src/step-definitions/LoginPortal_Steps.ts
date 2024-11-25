import { Then, When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';

let actualMessage: string;

When('I type username {string}', async (username: string) => {
    await pageFixture.page.getByPlaceholder('Username').fill(username);
});

When('I type password {string}', async (password: string) => {
    await pageFixture.page.getByPlaceholder('Password').fill(password);
});

When('I click on login button', async () => {
    pageFixture.page.on('dialog', async (dialog) => {
        actualMessage = dialog.message();
        await dialog.accept();
    });
    await pageFixture.page.getByRole('button', { name: 'Login' }).click();
});

Then('I am presented with alert message {string}', async (message: string) => {
    expect(actualMessage).toContain(message);
});
