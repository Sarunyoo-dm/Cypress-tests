import 'cypress-real-events'
import * as functions from '../utils/function';
import * as variables from '../utils/variables';
Object.assign(global,functions)
Object.assign(global,variables)

describe('Dashboard-Prior ', () => {
  

   beforeEach(() => {
     cy.visit(BASE_URL)
     LoginPrior(username,password) // ใช้ function LoginPrior ในการ Login
     })

    it.only('Login', () =>{
      cy.log('Login Pass')
    })

    it.only('Create Leaving', () => {
       FormCreateLeaving()
       CreateLeav(year_from,month_from,date_from,year_to,month_to,date_to,'Sick',employee_type)
       

    /*   cy.get('.mat-mdc-form-field-icon-suffix').eq(0).click() // คลิ๊ก เลือก Date From  
       cy.get('.mat-calendar-period-button').click()
       cy.get('.mat-calendar-body').contains(year).click()
       cy.get('.mat-calendar-body').contains(month).click()
       cy.get('.mat-calendar-body').contains(date_from).click()
       cy.get('.mat-mdc-form-field-icon-suffix').eq(1).click()
       cy.get('.mat-calendar-period-button').click()
       cy.get('.mat-calendar-body').contains(year).click()
       cy.get('.mat-calendar-body').contains(month).click()
       cy.get('.mat-calendar-body').contains(date_to).click()
       cy.get('.form-check-label').contains(leav_type).click()
       cy.get('.form-check-label').contains(employee_type).click()
       cy.get('.modal-footer').contains('Submit').click()*/
   }) 
     it('Cancel Leav', () => {
        cy.get('ul').should('be.visible')
        cy.get('li').eq(4).should('be.visible').click() // คลิ๊ก Leaving
        cy.url().should('include' , 'https://prior-dashboard-dev.web.app/calendar') // เช็คว่าคลิ๊ก calendar เข้ามาแล้ว URL ตรงกัน
        cy.get('.tab').contains('My Leave Calendar').click()
        cy.get('#LeaveCalendar .calendar-header').contains('Next').click()
        cy.get('#LeaveCalendar .event-day')
        cy.get('#LeaveCalendar .event-indicator').eq(0).realHover().should('be.visible')
      //cy.wait(2000)
        cy.get('.delete-icon').contains('X').click()
        cy.get('.confirm-button').contains('Yes').click()
  })
     it('Check Leaving', () => {
        cy.get('ul').should('be.visible')
        cy.get('li').eq(4).should('be.visible').click() // คลิ๊ก Leaving
        cy.url().should('include' , 'https://prior-dashboard-dev.web.app/calendar') // เช็คว่าคลิ๊ก calendar เข้ามาแล้ว URL ตรงกัน
        cy.get('.tab').contains('My Leave Calendar').click()
        cy.get('#LeaveCalendar .calendar-header').contains('Next').click()   
        deleteCalendar();   
  })
  
 }) 