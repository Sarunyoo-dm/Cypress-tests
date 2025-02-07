describe('First Test', () => {
    it('Visit the cypress.io', () => {
      cy.visit('https://example.cypress.io/')
      cy.contains('type').click() // ใช้หา Text คำว่า Type และ กดคลิ๊ก
      cy.url().should('include', 'https://example.cypress.io/commands/actions')
      cy.get('.action-email').type('diamond@gmail.com')
      cy.get('.action-email').should('have.value', 'diamond@gmail.com'); // เช็คว่า Textbox มีค่า diamond@gmail.com
    })
  }) 