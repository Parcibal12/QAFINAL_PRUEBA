Feature: SwagLabs Login and Logout Flow

  Scenario: Successful Login and Logout
    Given I launch the SwagLabs app
    When I login with standard user "standard_user" and password "secret_sauce"
    Then I should see the home page
    When I log out from the application
    Then I should see the login screen again