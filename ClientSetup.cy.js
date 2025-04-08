import * as functions from '../../utils/ClientSetup-functions';
import * as variables from '../../utils/variables';
Object.assign(global,functions)
Object.assign(global,variables)

describe('template spec', () => {

    beforeEach(() => {
      cy.visit('../../../cypress/e2e/Cypress-tests/ClientSetup_LOCAL_SAME_PAGE_P_SANTI.html')
      cy.viewport(1440, 900);
      cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen');
      }); // ใช้เพื่อปิด popup  
    });
    
    
  
    it('BAYtoBAY', () => {
      ChooseMaker('MAKER 2')
      SearchClient('Laza','LAZADA');
      BAYtoBAY();
      cy.log('เลือก UAM')
    })

})