# 🚀 Overview
This project is an automated testing framework built with Cypress, Cucumber BDD, and Page Object Model (POM). It enables behavior-driven development (BDD) for writing test cases in a human-readable format using Gherkin syntax.

## 📌 Tech Stack
- **Cypress** - JavaScript-based end-to-end testing framework
- **Cucumber BDD** - Defines test cases using Gherkin syntax
- **Page Object Model (POM)** - Enhances maintainability and reusability
- **Mochawesome** - Generates rich HTML test reports

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository and create a branch
```sh
git clone https://github.com/your-username/cypress_BDD.git
cd cypress_BDD
git checkout -b "loginfeature"
```

### 2️⃣ Install Dependencies and Configure Cypress

#### **Step 1: Initialize a package.json file**
```sh
npm init -y
```

#### **Step 2: Install Cypress**
```sh
npm install cypress --save-dev
```

#### **Step 3: Install Cucumber Plugin for Cypress**
We need the `cypress-cucumber-preprocessor` package to write tests in Gherkin syntax.
```sh
npm install @badeball/cypress-cucumber-preprocessor --save-dev
npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
```

#### **Step 4: Install cypress-mochawesome-reporter plugin**
```sh
npm install --save-dev cypress-mochawesome-reporter
```

#### **Step 5: Configure Cypress to Use Cucumber**
Update `cypress.config.js` to include the Cucumber preprocessor.

```javascript
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
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
```

#### **Step 6: Create a `cypress/support/e2e.js` File**
Modify `cypress/support/e2e.js` to include:

```javascript
import "@badeball/cypress-cucumber-preprocessor";
```

#### **Step 7: Create the BDD Test (`LoginPage.feature`)**
Create a feature file with the following content:

```
Feature: Login Functionality

  @smoke
  Scenario: Verify successful login
    Given the user navigates to the saucedemo website
    When the user enters the valid username and password
    And clicks the Login button
    Then the user verifies the url of the home page
```

#### **Step 8: Create a Step Definition File (`loginPageSteps.js`)**
Implement the following step definition (repeat for other steps as needed):

```javascript
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {Given as And } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

Given("the user navigates to the saucedemo website",()=>{
    LoginPage.visitLoginPage();
})
```

#### **Step 9: (Optional) Organizing Tests with Page Object Model (POM)**
To keep your tests modular and reusable, use the Page Object Model (POM).

Create `cypress/pages/LoginPage.js` and define methods:

```javascript
class LoginPage {
  loginPageElement = {
    userName : "#user-name",
    password : "#password",
    loginBtn : "#login-button"
  }

  visitLoginPage(){
    cy.visit("/");
  }

  enterUserName(userNameData) {
    cy.get(this.loginPageElement.userName).type(userNameData);
  }
}
export default new LoginPage();
```

---

## 3️⃣ Run Cypress Tests

### 📌 Run Tests in Cypress UI
```sh
npx cypress open
```

### 📊 Generating Test Reports (Mochawesome)
Run tests & generate reports using the `cypress-mochawesome-reporter` plugin:
```sh
npm run test
```

---

This README provides a detailed guide to setting up, using, and troubleshooting the Cypress + Cucumber BDD + POM framework. 🚀 Let me know if you need any modifications!

