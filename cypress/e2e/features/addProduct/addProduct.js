import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { action } from "../../functions";
import CustomerAccountIdentifiers from "../../customerAccountPageIdentifiers";

const value = require('../../customerAccountValues.json')
const customerAccountIdentifiers = new CustomerAccountIdentifiers();


Given('The user is logged in', () => { 
    action.loginValidData();
    action.emptyBaschet();   
})
When('The user click on FEMEI section', () => {
    action.clickButton(customerAccountIdentifiers.woman)
})
When('The user mouse hover BRANDURI section', () => {
    action.mouseHover(customerAccountIdentifiers.brandSection, customerAccountIdentifiers.popoverBrands)
})
When('The user select BRANDURI PREMIUM > FURLA', () => {
    action.clickButton(customerAccountIdentifiers.furla)
})
When('The user select CEL MAI MARE PRET', () => {
    action.clickButton(customerAccountIdentifiers.filterDropDown)
    cy.wait(500)
    action.clickButton(customerAccountIdentifiers.biggerPrice)
    cy.wait(500)
})
When('The user select the first product', () => {
    action.selectProduct(customerAccountIdentifiers.firstProduct)
})
When('The user add the product to basket', () => {
    action.clickButton(customerAccountIdentifiers.buyBox)
})
Then('The user check that the product is in the basket and clear the basket', () => {
    action.clickButton(customerAccountIdentifiers.baschetBtn)
    action.containsText(customerAccountIdentifiers.brandName, value.mainPageValues.brandName)
    action.clickButton(customerAccountIdentifiers.deletebtn)
})