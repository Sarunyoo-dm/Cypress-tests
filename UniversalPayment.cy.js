import 'cypress-real-events/support';
import * as functions from '../../utils/Universal-functions';
import * as variables from '../../utils/variables';
Object.assign(global,functions)
Object.assign(global,variables)

describe('template spec', () => {

  beforeEach(() => {
    cy.visit('../../../cypress/e2e/Cypress-tests/Universal_Payment_SAME_PAGE.html')
    cy.viewport(1440, 900);
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    }); // ใช้เพื่อปิด popup  
  });
  
  

  it('Entry UniversalPayment', () => {
    ChooseMaker('MAKER 2')
    TabPaymentlink()
    cy.log('Payment link123')
    SubMenuDraft()
  })

  it('Change Profile',()=>{
    ChooseMaker('MAKER 2')
    ChangeProfile('MK Suki 2')
  })

  it('Go TabComapny' , () =>{
    ChooseMaker('MAKER 2')
    TabComPanyTxn()
    cy.log('Entry TabCompany')
  })
})