import { exec } from 'child_process';
import dotenv from 'dotenv';
dotenv.config({ path: './env/.env' });

// Set value from env variable or defaulting to '0' or '1'
const retryValue = process.env.RETRY || '0';
const parallelValue = process.env.PARALLEL || '1';

// Define a common command string for running cucumber tests
const common = `./src/features/*.feature \
--require-module ts-node/register \
--require ./src/step-definitions/**/**/*.ts \
--require ./src/utils/cucumber-timeout.ts \
-f json:./reports/reports.json \
--format html:./reports/report.html \
--parallel ${parallelValue} \
--retry ${retryValue} \
--tags "not @ignore"`;

// Define an interface for the profiles object
interface ProfileCommands {
    [key: string]: string;
}

// Define a command strings for different test profiles
const profiles: ProfileCommands = {
    smoke: `${common} --tags "@smoke"`,
    regression: `${common} --tags "@regression"`,
    login: `${common} --tags "@login"`,
    contactUs: `${common} --tags "@contact-us"`,
    faker: `${common} --tags "@faker"`,
};

// Get the third command-line arg and assign it to the profile
// i.e. smoke, regression
console.log('ARG: ', process.argv);
const profile = process.argv[2];
console.log('Profile: ', profile);

// Construct a command-line string based on the selected profile
let command = profile
    ? `npx cucumber-js ${
          profiles[profile as 'smoke' | 'regression' | 'login' | 'contact-us']
      }`
    : `npx cucumber-js ${common}`;

// Print the constructed command
console.log('Command: ', command);

//Execute the command
exec(command, { encoding: 'utf-8' }, (error: Error | null, stdout: string) => {
    // Log the output of the command
    console.log('Standerd Output: ', stdout);

    // Check if there is an error during execution
    if (error) {
        throw new Error('Some automation test(s) have failed!');
    }
});
