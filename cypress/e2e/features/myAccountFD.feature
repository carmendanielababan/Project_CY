Feature: My Account Menu

    //Background: Login with valid credetials

    Scenario: Buy a gift card
        Given The user is logged in
        When The user clear the basket
        And The user click on Voucher menu
        And The user click on buy card
        And Select the amounth
        And The user type Name
        And The user type Email
        And The user Type Confirm Email
        And The user type Expeditor Name
        And The user type Message
        And The user click Buy Gift Card
        Then Parchase page is displayed
        

    Scenario: Add a new address
        Given The user is logged in
        When The user click on ADRESE menu
        And The user click on ADAUGA ADRESA NOUA
        And The user fill in NUME
        And The user Fill in NUMAR TELEFON
        And The user select JUDET
        And The user select ORAS
        And The user fill in ADRESA
        And The user fill in INFORMATII SUPLIMENTARE
        And The user click on SALVEAZA button
        Then The address is saved