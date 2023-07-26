import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { action } from "../../functions";
import CustomerAccountIdentifiers from "../../customerAccountPageIdentifiers";

const value = require('../../customerAccountValues.json')
const customerAccountIdentifiers = new CustomerAccountIdentifiers();

Given('The user is logged in', () => {
    action.loginValidData();
})
When('The user clear the basket', () => {
    action.emptyBaschet();
})
When('The user click on Voucher menu', () => {
    action.clickButton(customerAccountIdentifiers.customerAccountBtn)
    action.clickButton(customerAccountIdentifiers.giftCard)
})
When('The user click on buy card', () => {
    action.clickButton(customerAccountIdentifiers.buyGiftCardBtn)
})
When('Select the amounth', () => {
    action.clickButton(customerAccountIdentifiers.giftCardValue)
})
When('The user type Name', () => {
    action.typeText(customerAccountIdentifiers.destinatarName, value.mainPageValues.destinatarName)
})
When('The user type Email', () => {
    action.typeText(customerAccountIdentifiers.destinatarEmail, value.mainPageValues.destinatarEmail)
})
When('The user Type Confirm Email', () => {
    action.typeText(customerAccountIdentifiers.destinatarConfirmEmail, value.mainPageValues.destinatarConfirmationEmail)
})
When('The user type Expeditor Name', () => {
    action.typeText(customerAccountIdentifiers.senderName, value.mainPageValues.senderName)
})
When('The user type Message', () => {
    action.typeText(customerAccountIdentifiers.giftMessage, value.mainPageValues.message)
})
When('The user click Buy Gift Card', () => {
    action.clickButton(customerAccountIdentifiers.buyCardBtn)

})
Then('Parchase page is displayed', () => {
    action.urlContain('purchase/')
})



When('The user click on ADRESE menu', () => {
    action.clickButton(customerAccountIdentifiers.customerAccountBtn)
    action.clickButton(customerAccountIdentifiers.addresses)
})
When('The user click on ADAUGA ADRESA NOUA', () => {
    action.clickForce(customerAccountIdentifiers.addAddress)
})
When('The user fill in NUME', () => {
    action.typeText(customerAccountIdentifiers.fullName, value.mainPageValues.fullName)
})
When('The user Fill in NUMAR TELEFON', () => {
    action.typeText(customerAccountIdentifiers.phoneNumber, value.mainPageValues.phoneNumber)
})
When('The user select JUDET', () => {
    action.clickButton(customerAccountIdentifiers.judet)
    action.typeDropdown(customerAccountIdentifiers.judet, value.mainPageValues.judet)
})
When('The user select ORAS', () => {
    action.clickButton(customerAccountIdentifiers.city)
    action.typeDropdown(customerAccountIdentifiers.city, value.mainPageValues.city)
})
When('The user fill in ADRESA', () => {
    action.typeText(customerAccountIdentifiers.addressField, value.mainPageValues.address)
})
When('The user fill in INFORMATII SUPLIMENTARE', () => {
    action.typeText(customerAccountIdentifiers.additionalInfo, value.mainPageValues.additionalInfo)
})
When('The user click on SALVEAZA button', () => {
    cy.intercept('POST', 'https://www.fashiondays.ro/api-shop/customer/50/address/update/0').as('loadPage')
    action.clickForce(customerAccountIdentifiers.saveAddress)
})
Then('The address is saved', () => { 
    cy.wait('@loadPage').its('response.statusCode').should('eq', 200)
    action.containsText(customerAccountIdentifiers.addressDetails, value.mainPageValues.address)
    action.deleteAddress()
})