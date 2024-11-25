import { setDefaultTimeout } from '@cucumber/cucumber';

// Load env variable from .env file
import { config as loadEnv } from 'dotenv';
const env = loadEnv({ path: './env/.env' });

const timeout = parseInt(env.parsed?.CUCUMBER_CUSTOM_TIMEOUT || '60000');

// If too low, this will impact playwright timeouts
setDefaultTimeout(timeout); // 60 secs
