const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config(); // Ensure environment variables are loaded

module.exports = defineConfig({
  testDir: './tests',
  timeout: 80000,

  expect: {
    timeout: 20000, // Default expect assertion timeout (5s default)
  },

  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['allure-playwright', { outputFolder: 'allure-results' }],
    ['html'], // Keep HTML reporter for debugging
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://sfcc.petfoodking.com', // Ensure a valid URL
    actionTimeout: 60000,
    navigationTimeout: 60000,

    httpCredentials: {
      username: 'storefront',
      password: 'KATUjwEny4Nya29u',
    },

    viewport: { width: 1280, height: 720 },
    headless: false,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
