const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    retries: {
      runMode: 2,
      openMode: 1,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      apiUrl: process.env.API_URL
    },
    baseUrl: process.env.UI_URL,
    watchForFileChanges: true,
    defaultCommandTimeout: 30000,
    responseTimeout: 30000,
    pageLoadTimeout: 100000,
    // viewportHeight: 800,
    // viewportWidth: 1400,
    testIsolation: false,
    specPattern: "cypress/e2e/*_spec.cy.{js, jsx, ts, tsx}",
  },
});
