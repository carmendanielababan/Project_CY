import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { action } from "../../functions";
import CustomerAccountIdentifiers from "../../customerAccountPageIdentifiers";

const value = require('../../customerAccountValues.json')
const customerAccountIdentifiers = new CustomerAccountIdentifiers();

Given('The user is logged in', () => {
    action.loginValidData()
    action.emptyFavorite()
})
When('The user search for a product', () => {
    action.clickButton(customerAccountIdentifiers.searchBtn)
    action.typeEnter(customerAccountIdentifiers.searchInput, value.mainPageValues.searchProduct)
})
When('The user click on the first product', () => {
    action.selectProduct(customerAccountIdentifiers.productImage)
})
When('The user click on the Add Favorite button', () => {
    action.clickButton(customerAccountIdentifiers.addToFavorite)
})
Then('A message is displayed', () => {
    action.containsText(customerAccountIdentifiers.favoriteNotification, value.mainPageValues.addFavoriteMassage)
    cy.wait(2000)
    action.emptyFavorite()

})