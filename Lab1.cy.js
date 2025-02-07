// คลิ๊กไปที่ within() แล้วกรอกชื่อที่ช่อง Name

describe('Lab1 ', () => {
    it('Go to within and type name', () => {
      cy.visit('https://example.cypress.io/')
      cy.contains('within').click()
      cy.get('.form-control').should('be.visible')  
      cy.url().should('include', 'https://example.cypress.io/commands/querying')
      cy.get('#inputName').type('saranyoo')
      cy.get('#inputName').should('have.value', 'saranyoo') 
    })
  }) 