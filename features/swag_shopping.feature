Feature: SwagLabs Shopping Flow

  Scenario: Add items, remove item, and checkout
    Given I launch the SwagLabs app
    And I login with standard user "standard_user" and password "secret_sauce"
    When I add two products to the cart
    And I go to the cart
    And I remove one product from the cart
    And I proceed to checkout with details "Juan", "Perez", "12345"
    Then I should see the order confirmation message