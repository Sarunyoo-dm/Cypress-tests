describe('Calculate Grade', () => {
  it('Enter Form', () => {
      cy.visit('cypress/e2e/Calculate-grade.html')
    cy.get('#studentName').type('diamond')
    cy.get('#mathScore').type('85')
    cy.get('#scienceScore').type('75')
    cy.get('#englishScore').type('70')
    cy.wait(2000)
    cy.get('.btn-primary').click()
  })
}) 
  

  

