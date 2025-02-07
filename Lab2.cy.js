

describe('Lab2 ', () => {
    it('Add todo and checkbox', () => {
      cy.visit('https://example.cypress.io/todo#')
      cy.get('.view').eq(0).should('contain.text' , 'Pay electric bill' ) 
      // .view มีหลายตัว ในเคสนี้สนใจ element ตัวแรกที่มีคำว่า Pay electric bill
      cy.get('.view').eq(1).should('contain.text' , 'Walk the dog' )
      // ในเคสนี้สนใจ element ตัวที่สองที่มีคำว่า Walk the dog
      cy.get('.new-todo').type('Play game{enter}') // พิมพ์ Play game ลงในช่อง Todo และ กด Enter
      cy.get('.view').eq(2) // หาคำว่า Play game 
      cy.get('.toggle').eq(2).check() // เลือก checkbox ของค่าที่อยู่ลำดับ 2
      cy.get('.toggle').eq(2).click() // เอา checkbox ออก
    })
  }) 