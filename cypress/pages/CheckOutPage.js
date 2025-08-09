class CheckOutPage {
  checkoutPageElement = {
    productSortDropdown : "[data-test='product-sort-container']",
    inventoryItemBackpack : "#add-to-cart-sauce-labs-backpack",
    inventoryItemOnesie : "#add-to-cart-sauce-labs-onesie",
    shoppingCartLink : "[data-test='shopping-cart-link']",
    checkOutButton  : "#checkout",
    userFirstName : "#first-name",
    userLastName : "#last-name",
    postalCode : "#postal-code",
    continueButton : "#continue",
    finishButton : "#finish",
    backHomeButton : "#back-to-products",
    selectDropdown : "select"
  }

  selectPriceHightoLowOption(){
    cy.get(this.checkoutPageElement.selectDropdown).select("Price (high to low)");
  }

  addProductsToBasket(){
     cy.get(this.checkoutPageElement.inventoryItemBackpack).click();
     cy.get(this.checkoutPageElement.inventoryItemOnesie).click();
  }

  clickShoppingCartLink(){
     cy.get(this.checkoutPageElement.shoppingCartLink).click();
  }

  clickCheckOutButton(){
    cy.get(this.checkoutPageElement.checkOutButton).click();
  }

  enterFirstName(userFirstName){
      cy.get(this.checkoutPageElement.userFirstName).type(userFirstName)
  }

  enterLastName(userLastName){
    cy.get(this.checkoutPageElement.userLastName).type(userLastName);
  } 

  enterPostalCode(postalCode){
   cy.get(this.checkoutPageElement.postalCode).type(postalCode);
  }

  clickContinueButton(){
     cy.get(this.checkoutPageElement.continueButton).click();
  }

  clickFinishButton(){
     cy.get(this.checkoutPageElement.finishButton).click();
  }

  verifyCheckoutMessage(){
    cy.contains("Checkout: Complete!").should("be.visible");
    cy.contains("Thank you for your order!").should("be.visible");
    cy.get(this.checkoutPageElement.backHomeButton).should("be.visible");
  }

}
export default new CheckOutPage();