const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    specPattern: "cypress/e2e/features/*.feature",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome-report",
      overwrite: true,
      html: true,
      json: true,
      embeddedScreenshots: true, 
      inlineAssets: true,        
      quiet: true,
    },
    screenshotOnRunFailure: true,
    video : false,
    baseUrl: "https://www.saucedemo.com/",
    supportFile: "cypress/support/e2e.js",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      require("cypress-mochawesome-reporter/plugin")(on);
      on(
          "file:preprocessor",
          createBundler({
            plugins: [createEsbuildPlugin(config)],
          })
        );
      return config;
    },
  },
  cucumber: {
    stepDefinitions: ["cypress/support/step_definitions/**/*.{js,ts}"],
  },
});