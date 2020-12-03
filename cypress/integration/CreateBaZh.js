describe('CreateBa', () => {
    it('Create BA ZH', () => {
        cy.visit("https://10-tim.imfint.local")
        cy.contains('Log in').click()
        cy.url().should('include','login')
        cy.contains('username')
        
        //expect(true).to.equal(true)
    })
})