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

  enterPassword(passwordData) {
    cy.get(this.loginPageElement.password).type(passwordData);
  }

  clickLoginButton() {
    cy.get(this.loginPageElement.loginBtn).click();
  }

  displayErrorMessage() {
    cy.contains("Epic sadface: Username and password do not match any user in this service")
      .should('be.visible')
  }
  
  verifyurl(inventoryURL) {
    cy.url().should('eq',inventoryURL)
  }
}
export default new LoginPage();