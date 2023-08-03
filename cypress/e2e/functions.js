
import CustomerAccountIdentifiers from "./customerAccountPageIdentifiers";

const value = require('./customerAccountValues.json')
const customerAccountIdentifiers = new CustomerAccountIdentifiers();

export const action = {
    openPage(url) {
        cy.visit(url)
    },
    clickButton(btn) {
        cy.get(btn).click()
    },
    typeText(field, text) {
        cy.get(field).clear().type(text)
    },
    containsText(field, text) {
        cy.get(field).contains(text)
    },
    urlContain(text) {
        cy.url().should('contain', text)
    },
    loginValidData() {
        cy.visit(value.mainPageValues.url)
        cy.get(customerAccountIdentifiers.customerAccountBtn).click()
        cy.get(customerAccountIdentifiers.emailAddressField).type(value.mainPageValues.emailValid)
        cy.get(customerAccountIdentifiers.passwordField).type(value.mainPageValues.passwordValid)
        cy.get(customerAccountIdentifiers.loginBtn).click()
        // cy.intercept('POST', 'https://www.google.com/recaptcha/api2/reload?k=6Lcw5S4bAAAAAN0IfhAkS702bv9qRMlYErOajMD3').as('loadPage')
        //cy.wait('@loadPage').its('response.statusCode').should('eq', 200)
        cy.wait(3000)
    },

    emptyBaschet() {
        cy.get(customerAccountIdentifiers.baschetBtn).click({ force: true })
        cy.wait(1000)
        cy.get(customerAccountIdentifiers.baschetItemsContainer).then(($body) => { // baschet page

            if ($body.find(customerAccountIdentifiers.emptyBaschetmessage).is(':visible')) { //check if the message is visible on the page
                return;
            } else {
                cy.get(customerAccountIdentifiers.deletebtn).each(() => {
                    if ($body.find(customerAccountIdentifiers.emptyBaschetmessage).not(':visible')) {
                        cy.get(customerAccountIdentifiers.deletebtn).click()
                    }
                    else {
                        return;
                    }

                })
            }
        })

    },

    emptyFavorite() {
        cy.get(customerAccountIdentifiers.favoriteBtn).click({ force: true })
        cy.wait(1000)
        cy.get(customerAccountIdentifiers.favoriteList).then(($body) => { // baschet page

            if ($body.find(customerAccountIdentifiers.emptyFavoriteListMsg).is(':visible')) { //check if the message is visible on the page
                return;
            } else {
                cy.get(customerAccountIdentifiers.deleteFavorite).each(() => {
                    if ($body.find(customerAccountIdentifiers.emptyFavoriteListMsg).not(':visible')) {
                        cy.get(customerAccountIdentifiers.deleteFavorite).click({ force: true })
                    }
                    else {
                        return;
                    }

                })
            }
        })

    },

    typeEnter(field, text) {
        cy.get(field).clear().type(text).type('{enter}')
    },
    typeDropdown(field, text) {
        cy.get(field).type(text).type('{enter}')
    },
    selectProduct(selector) {
        cy.get(selector).first().click({ force: true })

    },
    validationMessage(selector, text) {
        cy.get(selector).focus().should('contain', text)
    },
    mouseHover(selector, popover) {
        cy.get(selector).trigger('mouseover')
        cy.get(popover).should('be.visible')
    },
    validationText(selector, text) {
        cy.get(selector).should('have.text', text)
    },
    checkCheckbox(selector) {
        cy.get(selector).check()
    },
    clickForce(btn) {
        cy.get(btn).click({ force: true })
    },
    deleteAddress() {
        cy.get(customerAccountIdentifiers.deleteAddress).click()
        cy.get(customerAccountIdentifiers.confirmDeleteAddress).click({ force: true })
    },
    filterProducts(category, filter){
        cy.get(category).click({ force: true })
        cy.wait('@'+filter).its('response.statusCode').should('eq', 200)
    }
}

