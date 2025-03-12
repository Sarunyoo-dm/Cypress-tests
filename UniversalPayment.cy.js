import 'cypress-real-events/support'
import * as functions from '../../utils/Universal-function';
import * as variables from '../../utils/variables';
Object.assign(global,functions)
Object.assign(global,variables)

describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://upayment.tbs.prior-dev.app/web/main-content')
    cy.viewport(1440, 900);
  });
  

  it('Entry UniversalPayment', () => {
    TabPaymentlink()
    cy.log('Click Paymentlink')
    SubMenuWaiting()
  })

  it('Change Profile',()=>{
    ChangeProfile('Profile Group C')
  })

  it.only('Button Action' , () =>{
   // cy.get('.wrap-card-class > .flex > :nth-child(1)').click() //Route popup
    cy.get('.wrap-card-class > .flex > :nth-child(2)').click() //Spinner
  })
})