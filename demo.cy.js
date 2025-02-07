
describe('Cypress E2E Testing Demo', () => {
  beforeEach(() => {
    cy.visit('https://example.com/')
  })
  afterEach(() => {
    cy.log('Running after each of my test')
  })
  it('Assert URL', () => {
    cy.url().should('contain', 'example.com')
  })
  it('Assert Title', () => {
    cy.title().should('contain', 'Example Domain')
  })
  it('Assert Element', () => {
    cy.get('h1').should('be.visible')
    cy.wait(2000)

    cy.get('p').should('be.visible')
  })
  it('Reload and Logs', () => {
    cy.log('Before Reload')
    cy.reload()
    cy.log('After Reload')

  })
})