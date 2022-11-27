const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://parabank.parasoft.com/parabank',
    env: {
      bookingWWW: 'https://automationintesting.online/'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
