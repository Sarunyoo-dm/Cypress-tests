// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import cypress = require("cypress")

Cypress.Commands.add('LoginPrior', (username, password) => {
    cy.get('.email-section').type(username)
    cy.get('.password-section').type(password)
    cy.get('[type=submit]').click()
  })

Cypress.Commands.add('ProfileMK5', () => {
  cy.get('div.wrap-tool-bar div.flex.flex-col.items-end>:nth-child(1)').eq(0).click()
  cy.get('div.wrap-custom-radio-base-layout-class div.flex.flex-row.items-center.justify-between.pl-6.relative.ng-star-inserted').eq(1).click()
})

  
Cypress.Commands.add('clickDropdownFrom', () =>{
  cy.get(dropdownFrom).click()
})

Cypress.Commands.add('chooseBank', (bank) =>{
  cy.get('[role="listbox"] .mdc-list-item__primary-text .flex.flex-col.w-full p').contains(bank).click();
})