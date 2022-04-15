describe('LoginGUI', () => {
    it('LOGIN TO TIM GUI', () => {
        cy.visit("https://10-tim.imfint.local")
        //login to TIM GUI
        cy.contains('Log in').click()
        cy.url().should('include','login')
        cy.get('#username').type('Agent').should('have.value','Agent')
        cy.get('#password').type('pa$$w0rd')
        cy.get('input.btn').click()
        cy.get('h2.ng-binding').should('contain','GUI')
    })

    // it ('Create BA POGO ZH', () => {
    //     cy.get('a[href="Providers"]').click()
    //     cy.url().should('include','Providers')
    //     cy.contains('create business Account').click()
    // }
    // )
})