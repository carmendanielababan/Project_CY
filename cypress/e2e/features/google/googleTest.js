import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Open google page', () => { 
    cy.visit("https://www.google.com/");
    cy.get('#L2AGLb').click();
})