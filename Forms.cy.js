/// <reference types="Cypress" />

describe('Form , Button & Checkbox', () => {
  it('Submit & Assert Form', () => {
    // Load the form
    cy.visit('https://practice-automation.com/form-fields/')
    cy.get('[id="feedbackForm"]').should('be.visible')

    // Fill the form
    cy.get('#name-input').type('diamond') // ใช้ ID ในการหา element โดยใช้เครื่องหมาย # แทน
    cy.get('[type=password]').type('181240DD') // ใช้ Type ในการหา element
    cy.get('#drink2').click() // ใช้ ID ในการติ๊ก checkbox
    cy.contains('Red').click() // ใช้ Text ในการคลิ๊ก radio button
    cy.get('#automation').select('Yes') // Select dropdown และเลือก Yes
    cy.get('#email').type('diamond@test.com')
    cy.get('#message').type('Test Form Cypress')
    cy.get('[data-cy="submit-btn"]').click()
    // Assert Form detail
  })

  
})