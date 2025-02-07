

describe('Dashboard-Prior ', () => {

    beforeEach(() => {
      cy.visit('https://prior-dashboard-dev.web.app/login')
      cy.get('.email-section').type('test')
      cy.get('.password-section').should('be.visible').type('11223344')
      cy.get('[type=submit]').click()
      })

    it('Create Leaving', () => {
        cy.get('ul').should('be.visible')
        cy.get('li').eq(4).should('be.visible').click() // คลิ๊ก Leaving
        cy.url().should('include' , 'https://prior-dashboard-dev.web.app/calendar') // เช็คว่าคลิ๊ก calendar เข้ามาแล้ว URL ตรงกัน
        cy.get('.calendar-header .month-btn').contains('Next').click() // คลิ๊กปุ่ม Next
        cy.get('.button-box').contains('Create Leave').click() // คลิ๊กสร้างวันลา
        cy.get('.mat-mdc-form-field-icon-suffix').eq(0).click() // คลิ๊กเลือก Date From
        cy.get('.mat-calendar-next-button').click() // กดปุ่ม next
        cy.get('.mat-calendar-body').contains('7').click() // เลือกวันที่ 7
        cy.get('.mat-mdc-form-field-icon-suffix').eq(1).click() // คลิ๊กเลือก Date To
        cy.get('.mat-calendar-next-button').click() // กดปุ่ม next
        cy.get('.mat-calendar-body').contains('10').click() // เลือกวันที่ 10
        cy.get('.form-check-label').contains('Annual').click()
        cy.get('.form-check-label').contains('Permanent').click()
        cy.get('.modal-footer').contains('Submit').click()

    })       
    
  }) 