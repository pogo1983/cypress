it('gets the post', () => {
    cy.visit('http://mpogorzelski/').contains('XHR in iframe')
    cy.get('iframe')
  })