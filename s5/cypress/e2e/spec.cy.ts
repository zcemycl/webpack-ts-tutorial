describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('passes', () => {
    cy.get('div').contains('0')
    cy.get('button').click().wait(1000)
      .get('h1').should('have.class', 'blue')
      .get('button').click().wait(1000)
      .get('h1').should('have.class', 'red')
      .get('button').click().wait(1000)
      .get('h1').should('have.class', 'blue')
      .get('button').click().wait(1000)
      .get('h1').should('have.class', 'red')
      cy.get('div').contains('4')
  })
})