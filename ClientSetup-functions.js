import * as variables from '../utils/variables';
Object.assign(global,variables)

export function SearchClient(Code,Name) { // เปิด Dashboard
    cy.get('.mat-mdc-form-field input').type(Code)
      cy.get('.mat-mdc-option').contains(Name).click();
  }

  export function ChooseMaker(MAKER) {
    cy.get('[type="submit"]').contains(MAKER).click()
  }

  export function UserlimitSetup() {
    cy.get('#main-tab-menu > :nth-child(2)').click();
  }

  export function AccountSetup() {
    cy.get('#main-tab-menu > :nth-child(3)').click();
  }

  export function Inhouse() {
    cy.get('#main-tab-menu > :nth-child(4)').click();
  }

  export function AccountMatching() {
    cy.get('#main-tab-menu > :nth-child(5)').click();
  }

  export function Loghistory() {
    cy.get('#main-tab-menu > :nth-child(6)').click();
  }
  
  export function BAYtoBAY(){
    cy.get('.mat-mdc-select-trigger').eq(2).click()
    //cy.get('.ng-trigger .mat-mdc-option div.flex').should('exist').and('contain', 'UAM').click()
    cy.get('.mat-mdc-option').should('be.visible');
    cy.get('.mat-mdc-option').contains('UAM').click();
    
  }
  