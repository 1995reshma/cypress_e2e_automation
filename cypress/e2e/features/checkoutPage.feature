Feature: Checkout Functionality

  @login
  @regression
  Scenario: Verify successful checkout
    Given the user sorts products by price high to low on the inventory page
    When the user adds the cheapest and second most expensive products into the basket
    And Proceeds to checkout
    Then they see the checkout complete message

