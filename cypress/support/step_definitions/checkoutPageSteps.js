import { Given, When, Then, Step, Before } from "@badeball/cypress-cucumber-preprocessor";
import {Given as And } from "@badeball/cypress-cucumber-preprocessor";
import CheckOutPage from "../../pages/CheckOutPage";

Before({ tags: "@login or @regression" }, () => {
  cy.loginToTheApp();
});

Given("the user sorts products by price high to low on the inventory page",()=>{
  CheckOutPage.selectPriceHightoLowOption();
})

When("the user adds the cheapest and second most expensive products into the basket",()=>{
 CheckOutPage.addProductsToBasket();
 CheckOutPage.clickShoppingCartLink();
})

And("Proceeds to checkout",()=>{
   CheckOutPage.clickCheckOutButton();
   Step(this,`enter user details as part of checkout`)
   Step(this,`user clicks continue button`)
   Step(this,`user clicks finish button`)
})

And("enter user details as part of checkout",()=>{
    CheckOutPage.enterFirstName(Cypress.env("userFirstName"));
    CheckOutPage.enterLastName(Cypress.env("userLastName"));
    CheckOutPage.enterPostalCode(Cypress.env("postalCode"));
})

And("user clicks continue button",()=>{
   CheckOutPage.clickContinueButton();
})

And("user clicks finish button",()=>{
   CheckOutPage.clickFinishButton();
})

Then("they see the checkout complete message",()=>{
  CheckOutPage.verifyCheckoutMessage()
})