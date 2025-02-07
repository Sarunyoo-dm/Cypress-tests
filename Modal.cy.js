/// <reference types="Cypress" />


describe('Cypress Modals', () => {
  it('Open And Assert Modal', () => {
    cy.visit('https://practice-automation.com/modals/')
    cy.get('#simpleModal').click() // หา element จาก id และกดเปิด modal
    cy.get('#pum-1318').should('contain', 'Hi, I’m a simple modal.') // ต้องเจอ id=pum-1318 และเจอข้อความ
    cy.wait(2000) // รอ 2 วินาที
    cy.get('#pum-1318').should('be.visible').find('.pum-close').click() // หา .pum-close ที่อยู่ใน #pum-1318 และคลิก
  
  })
})