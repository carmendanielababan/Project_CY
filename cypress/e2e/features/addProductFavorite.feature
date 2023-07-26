Feature: Favorite list

    Scenario: Search for a product and add it to favorite
    Given The user is logged in
    When The user search for a product
    And The user click on the first product
    And The user click on the Add Favorite button
    Then A message is displayed
