describe('CreateBa', () => {
    it('Create BA ZH', () => {
        cy.visit("https://10-tim.imfint.local")
        cy.contains('Log in').click()
        cy.url().should('include','login')
        cy.get('model.username').type('Agent').should('have.value','Agent')
        cy.get('password').type('pa$$w0rd')
        cy.contains('inloggen').click()
        
        
        //expect(true).to.equal(true)
    })
})