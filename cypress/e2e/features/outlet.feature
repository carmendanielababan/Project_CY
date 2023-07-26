Feature: Outlet section

    Feature Description
    Scenario: Validate an element in outlet section
    Given The user is logged in
    When The user click outlet section
    And Check that the section - Articole intre 50-100 lei - exista
    And Selecteaza Categoria > Bijuterii
    And Selecteaza Material > Argint
    And Sorteaza cel mai mic pret
    And Selecteaza primul produs
    Then Check Caracteristici > Material: argint



