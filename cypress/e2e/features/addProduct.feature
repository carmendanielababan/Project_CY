Feature: Add product to basket

    Feature Description
    
    Scenario: Add product from a category to basket
    Given The user is logged in
    When The user click on FEMEI section
    And The user mouse hover BRANDURI section
    And The user select BRANDURI PREMIUM > FURLA
    And The user select CEL MAI MARE PRET
    And The user select the first product
    And The user add the product to basket
    Then The user check that the product is in the basket and clear the basket




