/// <reference types="Cypress" />

describe('Form , Button & Checkbox', () => {
  it('Submit & Assert Form', () => {
    // Variable with data
    const name = 'diamond'
    const password = '181240DD'
    const drink = 'Milk'
    const color = 'Red'
    const select = 'Yes'
    const email = 'diamond@test.com'
    const message = 'Test Form Cypress'
    // Load the form
    cy.visit('https://practice-automation.com/form-fields/')
    cy.get('[id="feedbackForm"]').should('be.visible')

    // Fill the form
    cy.get('#name-input').type(name) // ใช้ ID ในการหา element โดยใช้เครื่องหมาย # แทน
    cy.get('[type=password]').type(password) // ใช้ Type ในการหา element
    cy.contains(drink).click() // ใช้ตัวแปร ในการติ๊ก checkbox
    cy.contains(color).click() // ใช้ตัวแปร ในการคลิ๊ก radio button
    cy.get('#automation').select(select) // Select dropdown และเลือก Yes
    cy.get('#email').type(email)
    cy.get('#message').type(message)
    cy.get('[data-cy="submit-btn"]').click()
    // Assert Form detail
  })

  
})