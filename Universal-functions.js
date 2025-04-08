import * as variables from '../utils/variables';
Object.assign(global,variables)

export function TabDashboard() { // เปิด Dashboard
    cy.get('.wrap-sidenav-desktop >:nth-child(1)').click()
  }

export function ChooseMaker(MAKER) {
  cy.get('[type="submit"]').contains(MAKER).click()
}
export function TabPaymentlink() { // เปิด Paymentlink
   cy.origin('https://upayment.tbs.prior-dev.app', () => {
    cy.get('.wrap-sidenav-desktop >:nth-child(2)').should('be.visible').click();
  });   
  }

export function TabComPanyTxn() { // เปิด Companytransaction
    cy.get('.wrap-sidenav-desktop >:nth-child(3)').click()
  }

export function TabReport() { // เปิด Report
    cy.get('.wrap-sidenav-desktop >:nth-child(4)').click()
  }

export function TabShopSetting() { // เปิด Shop
    cy.get('.wrap-sidenav-desktop >:nth-child(5)').click()
  }

export function SubMenuDraft() { // เปิด Draft
    cy.get('.wrap-desktop-sub-menu ul > li:nth-child(2)').click()
  }

export function SubMenuPending() { // เปิด Pending
    cy.get('.wrap-desktop-sub-menu ul > li:nth-child(3)').click()
  }

  export function SubMenuSchedule() { // เปิด Schedule
   cy.get('.wrap-desktop-sub-menu ul > li:nth-child(4)').realHover().click()
   //cy.get('.wrap-desktop-sub-menu ul > li:nth-child(4)').click()
  }
  export function SubMenuWaiting() { // เปิด Waiting for approval
    cy.get('.wrap-desktop-sub-menu ul > li:nth-child(5)').realHover().click()
  }

  export function ChangeProfile(Profile) { // เลือก Profile
    cy.get('.wrap-header .wrap-select-class').click()
    cy.get('.cdk-virtual-scroll-content-wrapper p').contains(Profile).click()
  }