const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  projectId: "82nbbu",
  e2e: {
    retries: {
      runMode: 2,
      openMode: 1,
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
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
