describe('CreateBa', () => {
    it('LOGIN', () => {
        cy.visit("https://10-tim.imfint.local")
        cy.contains('Log in').click()
        cy.url().should('include','login')
        cy.get('#username').type('Agent').should('have.value','Agent')
        cy.get('#password').type('pa$$w0rd')
        cy.get('input.btn').click()
        cy.get('h2.ng-binding').should('contain','GUI')
        //cy.contains('Infomedics TIM GUI').should('include','GUI')
        //expect('Infomedics TIM GUI').to.equal('Infomedics TIM GUI')
        //expect(true).to.equal(true)
    })
})