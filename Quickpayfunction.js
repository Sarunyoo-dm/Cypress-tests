//import {BASE_URL,username,password,year_from,month_from,date_from,year_to,month_to,date_to,leav_type,employee_type,accountFrom,accountTo,amount,verbene,dropdownFrom} from './variables'
import * as variables from '../utils/variables';
Object.assign(global,variables)

export function LoginPrior(username, password) { // ฟังก์ชัน Login
    cy.get('.email-section').type(username)
    cy.get('.password-section').type(password)
    cy.get('[type=submit]').click()
  }

export function FormCreateLeaving() {
    cy.get('ul').should('be.visible')
    cy.get('li').eq(4).should('be.visible').click() // คลิ๊ก Leaving
    cy.url().should('include' , 'https://prior-dashboard-dev.web.app/calendar') // เช็คว่าคลิ๊ก calendar เข้ามาแล้ว URL ตรงกัน
    cy.get(".button-box button[class='create-post cursor-pointer']").click() // คลิ๊กสร้างวันลา
}

export function CreateLeav(year_from,month_from,date_from,year_to,month_to,date_to,leav_type,employee_type) {
    cy.get('.mat-mdc-form-field-icon-suffix.ng-tns-c1534922977-3.ng-star-inserted').click() // คลิ๊ก เลือก Date From  
    cy.get('.mat-calendar-period-button').click()
       cy.get('.mat-calendar-body').contains(year_from).click()
       cy.get('.mat-calendar-body').contains(month_from).click()
       cy.get('.mat-calendar-body').contains(date_from).click()  
       cy.get('.mat-mdc-form-field-icon-suffix').eq(1).click() // เลือก Date To
       cy.get('.mat-calendar-period-button').click() // เลือกปี เลือกเดือน
       cy.get('.mat-calendar-body').contains(year_to).click()
       cy.get('.mat-calendar-body').contains(month_to).click()
       cy.get('.mat-calendar-body').contains(date_to).click()
       cy.get('.form-check-label').contains(leav_type).click()
       cy.get('.form-check-label').contains(employee_type).click()
       cy.get('.modal-footer').contains('Submit').click()
}

export function cancelLeave() {
  cy.get('ul').should('be.visible')
  cy.get('li').eq(4).should('be.visible').click() // คลิ๊ก Leaving
  cy.url().should('include' , 'https://prior-dashboard-dev.web.app/calendar') // เช็คว่าคลิ๊ก calendar เข้ามาแล้ว URL ตรงกัน
  cy.get('.tab').contains('My Leave Calendar').click()
  cy.get('#LeaveCalendar .calendar-header').contains('Next').click()
}

export function deleteCalendar() {
    // ตรวจสอบว่ามีวันลาที่ต้องลบหรือไม่
      cy.get('#LeaveCalendar').then(($days) => {
      const leaveDays = $days.filter((index, el) => el.textContent.includes('PJ'));
     
      // ถ้ามีวันลาที่ตรงกับ "PJ"
      if (leaveDays.length > 0) {
        // ลบวันลาแรกในรายการ

        cy.wrap(leaveDays[0]).realHover().should('be.visible');
        cy.get('.delete-icon').contains('X').click({force: true});
        cy.get('.confirm-button').contains('Yes').click();      
        // รอให้ DOM อัปเดตหลังการลบ
       cy.wait(1000);      
        // เรียกฟังก์ชัน deleteCalendar ซ้ำเพื่อตรวจสอบวันลาที่เหลือ
        deleteCalendar();
      } else {
        // ถ้าไม่มีวันลาที่ตรงกับ "PJ"
        cy.log('No more leave days for PJ to delete');
      }
     }); 
  }
export function KrungsriTransfer() { //ฟังก์ชันเปิดหน้าโอนเงินกรุงศรี
  cy.contains('MAKER 4').click()
  cy.log('test')
 // cy.wait(5000)
 // cy.get('.swal2-confirm').click()
  cy.get('.flex.flex-row.items-center.max-h-full .ng-star-inserted').click() // เปิด hamburger
  cy.get('div.krungsri-con-bold.ng-tns-c1069438098-2.contain-sidenav-th>:nth-child(2)').click() //เลือกแท็บโอนเงิน
  cy.get('.sub-menu.krungsri-con.whitespace-pre-line.break-words.cursor-pointer.ng-star-inserted').eq(1).click() // เลือกโอนเงินธนาคารกรุงศรี
}

export function ProfileMK5(){
  cy.get('div.wrap-tool-bar div.flex.flex-col.items-end>:nth-child(1)').eq(0).click()
  cy.get('div.wrap-custom-radio-base-layout-class div.flex.flex-row.items-center.justify-between.pl-6.relative.ng-star-inserted').eq(1).click()
  // Step 1: เข้าหน้า Auth URL ก่อน
  cy.visit('https://qpayment.tbs.prior-dev.app/', {
    auth: {
      username: 'cms',
      password: '5YuhJT3KU8ib'
    }
  });
  // Step 2: กลับมาหน้า HTML ที่อยู่ในเครื่อง
  cy.visit('../../../cypress/e2e/Cypress-tests/QuickPayment_PRIOR_SAME_PAGE.html');
}


export function OpenwaitapproveForMaker() { // เปิดหน้า Wait Approve
    cy.get('.flex.flex-row.items-center.max-h-full .ng-star-inserted').click() // เปิด hamburger
        cy.get('div.krungsri-con-bold.ng-tns-c1069438098-2.contain-sidenav-th>:nth-child(6)').click() // เลือกแท็บรออนุมัติ
        cy.get('div .wrap-sub-menu.ng-tns-c2033655494-3>:nth-child(1)').click() // เลือกรายการโอนเงิน
        cy.get('.flex.flex-row.items-center.max-h-full .ng-star-inserted').click() // ปิด hamburger
  }

  export function OpenwaitapproveForChecker() { // เปิดหน้า Wait Approve
    cy.get('.flex.flex-row.items-center.max-h-full .ng-star-inserted').click() // เปิด hamburger
        cy.get('div.krungsri-con-bold.ng-tns-c1069438098-2.contain-sidenav-th>:nth-child(2)').click() // เลือกแท็บรออนุมัติ
        cy.get('div .wrap-sub-menu.ng-tns-c2033655494-3>:nth-child(1)').click() // เลือกรายการโอนเงิน
        cy.get('.flex.flex-row.items-center.max-h-full .ng-star-inserted').click() // ปิด hamburger
  }

export function OpenHistory() { //ฟังก์ชันเปิดหน้าประวัติทำรายการ
    cy.contains('MAKER 4').click()
    cy.log('test')
    //cy.wait(5000)
    //cy.get('.swal2-confirm').click() ปิด popup error
    cy.get('.flex.flex-row.items-center.max-h-full .ng-star-inserted').click() // เปิด hamburger
    cy.get('div.krungsri-con-bold.ng-tns-c1069438098-2.contain-sidenav-th>:nth-child(8)').click() //เลือกแท็บประวัติ
  }

export function KrungsiMakeTxn(txn) {
    const accountFrom = '777-0-03531-3'
    const accountTo = '7463930291'
    const amount = '69'
    Cypress._.times(txn, (index) => { 
      it.only(`Make ${txn} Txn #${index + 1}`, () => {
        KrungsriTransfer();
        cy.ProfileMK5(); //เปลี่ยน Profile เป็น MK5
        cy.get('div.mat-mdc-text-field-wrapper.mdc-text-field.ng-tns-c3736059725-4').click() // คลิ๊ก dropdown บัญชี From
        cy.get('.flex.flex-row.w-full.gap-2>:nth-child(2)').contains(accountFrom).scrollIntoView().click() // คลิ๊กบัญชีจาก
        cy.get('div.row-start-2 p').should('contain.text' , accountFrom).log('บัญชีตรงกับที่เลือก') // ตรวจสอบเลขบัญชีที่เลือกว่าแสดงในหน้าจอถูกต้อง
        cy.get('div.mat-mdc-form-field-infix.ng-tns-c3736059725-6').click().type(accountTo) // ใส่เลขบัญชี accounto
        cy.get('div.custom-text-input-class').eq(0).click().type(amount) // ใส่จำนวนเงิน
        cy.get('div button.btn.btn-lg').click() // คลิ๊กปุ่มถัดไป
        cy.get('div button.btn.btn-lg.btn-primary').contains('ยืนยันและส่งรายการ').scrollIntoView().click() // scroll มาปุ่มยืนยันและคลิ๊ก 
        cy.get('div button.btn.btn-lg.btn-secondary').contains('เสร็จสิ้น').scrollIntoView().click() // กลับมาหน้ากรอกข้อมูลอีกครั้ง
        cy.log('โอนเงินสำเร็จ')
    });      
      })
  }
export function CancelTxnfirst() { // CancelTxn แรกในหน้า
    cy.contains('MAKER 4').click()
    Openwaitapprove(); // เปิดหน้า waitapprove    
    cy.get('tbody.ng-star-inserted tr>:nth-child(1)>:nth-child(1) div.custom-checkbox-class [type="checkbox"]').eq(0).check()
    cy.get('div.w-full.flex-row.mb-6.justify-end > button:nth-child(1)').click()
    cy.get('div.swal2-popup.swal2-modal.swal2-icon-warning.swal2-show textarea').type('Cancel')
    cy.get('div.swal2-popup.swal2-modal.swal2-icon-warning.swal2-show div.swal2-actions.wrap-popup-warning > button:nth-child(2)')
    .click()
    cy.get('div.swal2-popup.swal2-modal.swal2-icon-success.swal2-show div.swal2-actions.wrap-popup-success button:nth-child(2)')
    .click().log('ยกเลิกรายการสำเร็จ')
  }

export function OtherbankTransfer() { //ฟังก์ชันเปิดหน้าโอนเงินต่างธนาคาร
    cy.contains('MAKER 4').click()
    cy.log('test')
    cy.url().should('contain', 'quick-payment-frontend/web/my/account')
  //  cy.get('.swal2-popup.swal2-modal.swal2-icon-error.swal2-show .swal2-actions').click()
    cy.get('.flex.flex-row.items-center.max-h-full .ng-star-inserted').click() // เปิด hamburger
    cy.get('div.krungsri-con-bold.ng-tns-c1069438098-2.contain-sidenav-th>:nth-child(2)').click() //เลือกแท็บโอนเงิน
    cy.get('.sub-menu.krungsri-con.whitespace-pre-line.break-words.cursor-pointer.ng-star-inserted').eq(2).click() // เลือกโอนเงินต่างธนาคาร
  }
  
export function OtherMakeTxn(txn) {
    const accountFrom = '777-0-03531-3'
    const accountTo = '7463930291'
    const bank = 'กรุงไทย'
    const amount = '69'
    Cypress._.times(txn, (index) => { 
      it.only(`Make ${txn} Txn #${index + 1}`, () => {
        OtherbankTransfer();
        cy.ProfileMK5(); //เปลี่ยน Profile เป็น MK5
        cy.get('div.mat-mdc-text-field-wrapper.mdc-text-field.ng-tns-c3736059725-4').click() // คลิ๊ก dropdown บัญชี From
        cy.get('.flex.flex-row.w-full.gap-2>:nth-child(2)').contains(accountFrom).scrollIntoView().click() // คลิ๊กบัญชีจาก
        cy.get('div.row-start-2 p').should('contain.text' , accountFrom).log('บัญชีตรงกับที่เลือก') // ตรวจสอบเลขบัญชีที่เลือกว่าแสดงในหน้าจอถูกต้อง
        cy.get('.mat-mdc-form-field-flex.ng-tns-c3736059725-6').click() // คลิ๊ก dropdown บัญชี To
        cy.get('[role="listbox"] .mdc-list-item__primary-text .flex.flex-col.w-full p').contains(bank).click();
        cy.get('.mat-mdc-form-field-infix.ng-tns-c3736059725-13 input').click().type(accountTo) // ใส่เลขบัญชี accounto
        cy.get('div.custom-text-input-class').eq(0).click().type(amount) // ใส่จำนวนเงิน
        cy.get('div button.btn.btn-lg').click() // คลิ๊กปุ่มถัดไป
        cy.get('div button.btn.btn-lg.btn-primary').contains('ยืนยันและส่งรายการ').scrollIntoView().click() // scroll มาปุ่มยืนยันและคลิ๊ก 
        cy.get('div button.btn.btn-lg.btn-secondary').contains('เสร็จสิ้น').scrollIntoView().click() // กลับมาหน้ากรอกข้อมูลอีกครั้ง
        cy.log('โอนเงินสำเร็จ')
      });      
      })
  }
export function clickDropdownFrom() { // คลิ๊ก Dropdown บัญชีจาก
  cy.get(dropdownFrom).click()
}

export function clickDropdownFromBay() { // คลิ๊ก Dropdown บัญชีจาก
  cy.get(dropdownFromBay).click()
}

export function chooseAcctFrom(accountFrom) { // เลือกบัญชีจาก
  cy.get('.flex.flex-row.w-full.gap-2>:nth-child(2)').contains(accountFrom).scrollIntoView().click()
}

export function clickDropdownTo(){ // คลิ๊ก Dropdown บัญชีถึง
  cy.get('.mdc-text-field.ng-tns-c3736059725-15').click() 
}

export function chooseBank(bank){ // เลือกแบงค์ปลายทาง
  cy.get('[role="listbox"] .mdc-list-item__primary-text .flex.flex-col.w-full p').contains(bank).click();
}

export function inputOTHERacct(accountTo){ // ใส่เลขบัญชีต่างธนาคาร
  cy.get('.mat-mdc-form-field-infix.ng-tns-c3736059725-22').click().type(accountTo)
}

export function inputBAYacct(accountTo){ // ใส่เลขบัญชีกรุงศรี
  cy.get('div.mat-mdc-form-field-infix.ng-tns-c3736059725-15').click().type(accountTo)
}
export function inputAmt(amount){ // ใส่จำนวนเงิน
  cy.get('div.custom-text-input-class').eq(0).click().type(amount)
}

export function Verbene(){
  cy.get('.mat-mdc-form-field.ng-tns-c3736059725-22').click().type('1564897231456')
}

export function clickNext(){ // คลิ๊กปุ่ม Next
  cy.get('div button.btn.btn-lg').click()
}

export function clickConfirm(){ // คลิ๊กปุ่ม confirm
  cy.get('div button.btn.btn-lg.btn-primary').contains('ยืนยันและส่งรายการ').scrollIntoView().click()
}
export function clickOK(){ // คลิ๊กปุ่มเสร็จสิ้น
  cy.get('div button.btn.btn-lg.btn-secondary').contains('เสร็จสิ้น').scrollIntoView().click()
}

export function filterStatus(TxnStatus,year_from,month_from,year_to,month_to,date_from,date_to){ // ใช้กรองสถานะที่หน้าประวัติ

      OpenHistory();
      cy.ProfileMK5()
      cy.get('button.krungsri-con-bold.btn-primary.btn-lg.w-btn-lg').click() // กดปุ่มคัดกรอง
      cy.get('app-dropdown-image mat-form-field mat-select .ng-tns-c1771602899-21.ng-star-inserted p')
      .click()
      cy.get('#cdk-overlay-1 mat-option .mdc-list-item__primary-text .thongterm.leading-9').contains(TxnStatus)
      .scrollIntoView().click()
      cy.get('.cdk-overlay-container .mdc-dialog__container .mat-mdc-dialog-content.mdc-dialog__content custom-datepicker>:nth-child(1)>:nth-child(2) div.mat-mdc-form-field-infix.ng-tns-c3736059725-22 input')
      .click() //คลิ๊กเปิด Date Picker From
      cy.get('.mat-calendar-controls button .mdc-button__label').click() // เลือกวันที่ From
      cy.get('.mat-calendar-content .mat-calendar-body').contains(year_from).click();
      cy.get('.mat-calendar-table tbody td button span').contains(month_from).click();
      cy.get('div.mat-calendar-content').contains(date_from).click();
      cy.get('.cdk-overlay-container .mdc-dialog__container .mat-mdc-dialog-content.mdc-dialog__content custom-datepicker>:nth-child(1)>:nth-child(2) .mat-mdc-form-field-infix.ng-tns-c3736059725-23 input')
      .click() //คลิ๊กเปิด Date Picker To
      cy.get('.mat-calendar-controls button .mdc-button__label').click() // เลือกวันที่ To
      cy.get('.mat-calendar-content .mat-calendar-body').contains(year_to).click();
      cy.get('.mat-calendar-table tbody td button span').contains(month_to).click();
      cy.get('div.mat-calendar-content').contains(date_to).click();
      cy.get('.btn.btn-sm.btn-primary').click() // คลิ๊กปุ่มคัดกรอง
}