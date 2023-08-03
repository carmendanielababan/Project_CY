import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { action } from "../../functions";
import CustomerAccountIdentifiers from "../../customerAccountPageIdentifiers";



const value = require('../../customerAccountValues.json')
const customerAccountIdentifiers = new CustomerAccountIdentifiers();

Given('The user is logged in', () => { 
    action.loginValidData()
})
When('The user click outlet section', () => {
    action.mouseHover(customerAccountIdentifiers.outletSection, customerAccountIdentifiers.popover)   
})
When('Check that the section - Articole intre 50-100 lei - exista', () => {
    action.containsText(customerAccountIdentifiers.popover, value.mainPageValues.Aricle)
    action.clickButton(customerAccountIdentifiers.article50100)
})
When('Selecteaza Categoria > Bijuterii', () => {
    cy.intercept('POST', 'https://www.fashiondays.ro/api-shop/customer/50/bnpl/wallet').as(value.mainPageValues.filterByCategory)
    action.filterProducts(customerAccountIdentifiers.bijuterii, value.mainPageValues.filterByCategory)
})
When('Selecteaza Material > Argint', () => {
    action.filterProducts(customerAccountIdentifiers.silver, value.mainPageValues.filterByCategory)
})
When('Sorteaza cel mai mic pret', () => {
   action.clickButton(customerAccountIdentifiers.filterDropDown)
   action.clickButton(customerAccountIdentifiers.lowerPrice)
   cy.wait('@filterByCategory').its('response.statusCode').should('eq', 200)
})

When('Selecteaza primul produs', () => {
    action.selectProduct(customerAccountIdentifiers.productImage)
})
Then('Check Caracteristici > Material: argint', () => {
    action.containsText(customerAccountIdentifiers.productDetails, value.mainPageValues.materialSilver)
})