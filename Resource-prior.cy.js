import 'cypress-real-events'
import { LoginPrior } from '../utils/formHelper'

describe('Quick Payment', () => {
    
   beforeEach(() => {
    cy.visit('https://prior-dashboard-dev.web.app/login')
    cy.LoginPrior('test','11223344') // ใช้ function LoginPrior ในการ Login
     })

     it('Search role', () => {
      cy.get('ul').should('be.visible')
      cy.get('li').eq(1).click()
      cy.get('.p-autocomplete ').eq(0).click().type('Sarun').contains('Sarunyoo').click()
      cy.get('.searchInput').eq(4).click()
      cy.get('.table-collapse').should('contain', 'Sarunyoo')
     })
    })