import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { action } from "../../functions";
import CustomerAccountIdentifiers from "../../customerAccountPageIdentifiers";

const value = require('../../customerAccountValues.json')
const customerAccountIdentifiers = new CustomerAccountIdentifiers();

console.log("CustomerAccountIdentifiers=" + customerAccountIdentifiers);

Given('Open FashionDays page', () => { 
    action.openPage(value.mainPageValues.url);
})

When('Login with invalid credentials', () => {
    action.clickButton(customerAccountIdentifiers.customerAccountBtn)
    action.typeText(customerAccountIdentifiers.emailAddressField, value.mainPageValues.emailInvalid)
    action.typeText(customerAccountIdentifiers.passwordField, value.mainPageValues.passwordValid)
    action.clickButton(customerAccountIdentifiers.loginBtn)

})
Then('An error message is displayed', () => {
    action.containsText(customerAccountIdentifiers.faildLoginMessage, value.mainPageValues.faildLoginMessageError)
})


When('Login with valid credentials', () => {
    action.clickButton(customerAccountIdentifiers.customerAccountBtn)
    action.typeText(customerAccountIdentifiers.emailAddressField, value.mainPageValues.emailValid)
    action.typeText(customerAccountIdentifiers.passwordField, value.mainPageValues.passwordValid)
    action.clickButton(customerAccountIdentifiers.loginBtn)


})
Then('The user is logged in', () => {
    action.clickButton(customerAccountIdentifiers.customerAccountBtn)
    cy.wait(2000)
    action.containsText(customerAccountIdentifiers.myAccountArea, value.mainPageValues.myAccountText)
})


// succesfull login with parameters
When('I click on the account button', () => {
    action.clickButton(customerAccountIdentifiers.customerAccountBtn)
})
When('I type email address {string}', (email) => {
   // cy.get('#email').type(email)
   action.typeText(customerAccountIdentifiers.emailAddressField, email)

}) 
When('I type password {string}', (password) => {
    action.typeText(customerAccountIdentifiers.passwordField, password)
}) 
When('I click on the login button', () => {
    action.clickButton(customerAccountIdentifiers.loginBtn)
})