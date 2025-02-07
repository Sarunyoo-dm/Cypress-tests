import 'cypress-real-events'
import * as functions from '../utils/function';
import * as variables from '../utils/variables';
Object.assign(global,functions)
Object.assign(global,variables)
//import { KrungsriTransfer,Openwaitapprove,History,KrungsiMakeTxn,CancelTxnfirst,OtherbankTransfer,OtherMakeTxn} from '../utils/function'
//import { dropdownFrom,accountFrom,accountTo,amount,bank } from '../utils/variables'



 describe('Visit Quickpay ', () => {

    beforeEach(() => {
        cy.visit('cypress/e2e/QuickPayment.html')
        })
      //KrungsiMakeTxn(3);
      //OtherMakeTxn(5);
    
    it.skip('โอนเงินกรุงศรีและยกเลิกรายการด้วย Ref.', () => {
        KrungsriTransfer();
        cy.ProfileMK5(); //เปลี่ยน Profile เป็น MK5
        cy.get(dropdownFrom).click() // คลิ๊ก dropdown บัญชี From
        cy.get('.flex.flex-row.w-full.gap-2>:nth-child(2)').contains(accountFrom).scrollIntoView().click() // คลิ๊กบัญชีจาก
        cy.get('div.row-start-2 p').should('contain.text' , accountFrom).log('บัญชีตรงกับที่เลือก') // ตรวจสอบเลขบัญชีที่เลือกว่าแสดงในหน้าจอถูกต้อง
        cy.get('div.mat-mdc-form-field-infix.ng-tns-c3736059725-6').click().type(accountTo) // ใส่เลขบัญชี accounto
        cy.get('div.custom-text-input-class').eq(0).click().type(amount) // ใส่จำนวนเงิน
      //  cy.get('div.custom-text-input-class').eq(1).click().type(verbene) // ใส่เลข verbene
        cy.get('div button.btn.btn-lg').click() // คลิ๊กปุ่มถัดไป
        cy.get('div button.btn.btn-lg.btn-primary').contains('ยืนยันและส่งรายการ').scrollIntoView().click() // scroll มาปุ่มยืนยันและคลิ๊ก 
        cy.wait(1000)
        cy.get('div.custom-grid-cols-account-section-left>:nth-child(2)>:nth-child(3) span')
        .should('exist')
        .and('be.visible')
        .and('not.be.empty')
        .invoke('text')
        .as('referenceID') // เก็บค่า text ที่ได้ไว้ที่ alias ชื่อ referenceid
      cy.get('@referenceID').then((referenceID) => {
        cy.get('div button.btn.btn-lg.btn-secondary').contains('เสร็จสิ้น').scrollIntoView().click() // กลับมาหน้ากรอกข้อมูลอีกครั้ง
        cy.log('โอนเงินสำเร็จ')
        Openwaitapprove(); // เปิดหน้า waitapprove
        cy.get('button.krungsri-con-bold.btn-primary.btn-lg.w-btn-lg').click() // กดปุ่มคัดกรอง
        cy.get('.cdk-overlay-container .mdc-dialog__container .mat-mdc-dialog-content.mdc-dialog__content app-text-input>:nth-child(1)>:nth-child(2)').eq(3)
        .click().type(referenceID)
        cy.get('div.mat-mdc-dialog-actions.mdc-dialog__actions button.btn.btn-sm.btn-primary')
        .click()
      })
        cy.get('tbody.ng-star-inserted tr>:nth-child(1)>:nth-child(1) div.custom-checkbox-class [type="checkbox"]').eq(0).check()
        })
    it.skip('เช็ควันที่ default',() =>{
      const today = new Date().toLocaleDateString('en-GB', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
      });
      History();
      cy.ProfileMK5()
      cy.get('button.krungsri-con-bold.btn-primary.btn-lg.w-btn-lg').click() // กดปุ่มคัดกรอง
     // cy.get('.cdk-overlay-container .mdc-dialog__container .mat-mdc-dialog-content.mdc-dialog__content custom-datepicker>:nth-child(1)>:nth-child(2)')
     // .eq(0).click().log('datefrom') //V1
      cy.get('.cdk-overlay-container .mdc-dialog__container .mat-mdc-dialog-content.mdc-dialog__content custom-datepicker>:nth-child(1)>:nth-child(2) div.mat-mdc-form-field-infix.ng-tns-c3736059725-22 input')
      .should('have.value', today).log('Datefrom : แสดงวันที่ปัจจุบัน',today); // เช็ค Datefrom ตรงกับวันปัจจุบัน
      //.click().log('datefrom') //V2
      cy.get('.cdk-overlay-container .mdc-dialog__container .mat-mdc-dialog-content.mdc-dialog__content custom-datepicker>:nth-child(1)>:nth-child(2) div.mat-mdc-form-field-infix.ng-tns-c3736059725-23 input')
      .should('have.value', today).log('Dateto : แสดงวันที่ปัจจุบัน',today); // เช็ค Dateto ตรงกับวันปัจจุบัน
    })

    it.skip('maker create และยกเลิกรายการแรก', () => { //
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
      Openwaitapprove(); // เปิดหน้า waitapprove    
      cy.get('tbody.ng-star-inserted tr>:nth-child(1)>:nth-child(1) div.custom-checkbox-class [type="checkbox"]').eq(0).check()
      cy.get('div.w-full.flex-row.mb-6.justify-end > button:nth-child(1)').click()
      cy.get('div.swal2-popup.swal2-modal.swal2-icon-warning.swal2-show textarea').type('Cancel')
      cy.get('div.swal2-popup.swal2-modal.swal2-icon-warning.swal2-show div.swal2-actions.wrap-popup-warning > button:nth-child(2)')
      .click()
      cy.get('div.swal2-popup.swal2-modal.swal2-icon-success.swal2-show div.swal2-actions.wrap-popup-success button:nth-child(2)')
      .click().log('ยกเลิกรายการสำเร็จ')
    })

    it('Cancel First',()=>{
      CancelTxnfirst();
    })

    it('โอนเงินต่างธนาคาร' , () =>{
      OtherbankTransfer() // โอนแบบต่างธนาคาร
      cy.ProfileMK5()
      clickDropdownFrom() // คลิ๊ก dropdown บัญชี From
      chooseAcctFrom(accountFrom) // คลิ๊กบัญชีจาก
      cy.get('div.row-start-2 p').should('contain.text' , accountFrom).log('บัญชีตรงกับที่เลือก') // ตรวจสอบเลขบัญชีที่เลือกว่าแสดงในหน้าจอถูกต้อง
      clickDropdownTo() // คลิ๊ก dropdown บัญชี To
      //cy.chooseBank('กรุงไทย').log('เลือกกรุงไทย') // ถ้าทำเป็น commands จะสามารถ chain กับ command ตัวอื่นได้
      chooseBank('กสิกร') // เลือกธนาคาร
      inputOTHERacct(accountTo) // ใส่เลขบัญชี accounto
      inputAmt(55) // ใส่จำนวนเงิน
      clickNext() // คลิ๊กปุ่มถัดไป
      clickConfirm() // scroll มาปุ่มยืนยันและคลิ๊ก 
      clickOK() // กลับมาหน้ากรอกข้อมูลอีกครั้ง
      cy.log('โอนเงินสำเร็จ')
    })

    it('โอนเงินกรุงศรี', () =>{
      KrungsriTransfer()
      cy.ProfileMK5()
      clickDropdownFrom() // คลิ๊ก dropdown บัญชี From
      chooseAcctFrom(accountFrom) // คลิ๊กบัญชีจาก
      cy.get('div.row-start-2 p').should('contain.text' , accountFrom).log('บัญชีตรงกับที่เลือก') // ตรวจสอบเลขบัญชีที่เลือกว่าแสดงในหน้าจอถูกต้อง
      inputBAYacct(accountTo) // ใส่เลขบัญชี accounto
      inputAmt(120) // ใส่จำนวนเงิน
      clickNext() // คลิ๊กปุ่มถัดไป
      clickConfirm() // scroll มาปุ่มยืนยันและคลิ๊ก 
      clickOK() // กลับมาหน้ากรอกข้อมูลอีกครั้ง
      cy.log('โอนเงินสำเร็จ')
      Openwaitapprove()

    })

 
    it.only('Filter Reject',()=>{
      let year_from = '2025'
      let month_from = 'ม.ค.'
      let year_to = '2025'
      let month_to = 'ม.ค.'
      let date_from = '1'
      let date_to = '30'
      History();
      cy.ProfileMK5()
      cy.get('button.krungsri-con-bold.btn-primary.btn-lg.w-btn-lg').click() // กดปุ่มคัดกรอง
      cy.get('app-dropdown-image mat-form-field mat-select .ng-tns-c1771602899-21.ng-star-inserted p')
      .click()
      cy.get('#cdk-overlay-1 mat-option .mdc-list-item__primary-text .thongterm.leading-9').contains('ปฏิเสธ')
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
    })

  
    

    
  
  }) 
