

describe('Lab3 ', () => {
    it('Add todo and checkbox', () => {
      cy.visit('https://example.cypress.io/todo#')
      cy.get('.view').eq(0).should('contain.text' , 'Pay electric bill' ) 
      // .view มีหลายตัว ในเคสนี้สนใจ element ตัวแรกที่มีคำว่า Pay electric bill
      cy.get('.view').eq(1).should('contain.text' , 'Walk the dog' )
      // ในเคสนี้สนใจ element ตัวที่สองที่มีคำว่า Walk the dog
      cy.get('.new-todo').type('Play game{enter}') // พิมพ์ Play game ลงในช่อง Todo และ กด Enter
      cy.get('.view').eq(2) // หาคำว่า Play game 
      cy.get('.destroy').eq(1).should('not.be.visible').click({ force: true }) // กดปุ่มปิด todo ตัวที่ 2
      cy.get('.view').should('have.length' , 2) // เช็คว่าเหลือ todo 2 ตัว
    })
  }) 