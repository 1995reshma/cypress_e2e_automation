import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {Given as And } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

Given("the user navigates to the saucedemo website",()=>{
    LoginPage.visitLoginPage();
})

When("the user enters the valid username and password",()=>{
    LoginPage.enterUserName(Cypress.env("username"));
    LoginPage.enterPassword(Cypress.env("password"));
})

And("clicks the Login button",()=>{
  LoginPage.clickLoginButton();
})

Then("the user verifies the url of the home page",()=>{
   LoginPage.verifyurl(Cypress.env("inventoryURL"));
})
