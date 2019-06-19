// https://docs.cypress.io/api/introduction/api.html

describe('Home page test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'There are 100 civics questions on the naturalization test. During your naturalization interview, you will be asked up to 10 questions from the list of 100 questions. You must answer correctly six (6) of the 10 questions to pass the civics test.'
    )
  })
})
