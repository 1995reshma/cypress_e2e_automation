import LoginPage from "../pages/LoginPage";
Cypress.Commands.add('loginToTheApp', () => 
{ 
  LoginPage.visitLoginPage();
  LoginPage.enterUserName(Cypress.env("username"));
  LoginPage.enterPassword(Cypress.env("password"));
  LoginPage.clickLoginButton(); 
})