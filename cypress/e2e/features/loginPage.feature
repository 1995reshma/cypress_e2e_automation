Feature: Login Functionality

  @smoke
  Scenario: Verify successful login
    Given the user navigates to the saucedemo website
    When the user enters the valid username and password
    And clicks the Login button
    Then the user verifies the url of the home page
