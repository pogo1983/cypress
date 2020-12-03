describe('CreateBa', () => {
    it('Create BA ZH', () => {
        cy.visit("https://10-provider-inloggen.imfint.local/core/login?message=cllR-_YMh5W0t1IJpMFoaIv5DRLWCyXfOo2gfOo-wMa3JBjP82QF66PanTcEogEOE4D1M9g8u2oGdXt7YwXaS5rjcNYKtbEQN2MgmeC9lRO9z9tp9u9c5hYkl8sBkQfnKFzi2yjY7MRQpEhQkqtd_a2S01kBvefDHeANaEgKNMbaEDnQajprcCSsMpYR04ybbJsN4UbpZDj9CVhcPCFagITC9xkG7QRjtV0mFuq5DF16SSgcIptuHtCa7D1g9GePsFH7B4GNiC5SLYaK8PVYPGBpMgzXs7pyC98I5aYiFnEkBqppqpgWaGYDqR60kC73sSGxLt8bM23TZdSB1ecOYnba_aCOYxrUgoJOUEbSjs4")
        //cy.contains('Log in').click()
        //cy.url().should('include','login')
        cy.get('iframe')
         .then(($iframe) => {
        const $body = $iframe.contents().find('body')

        cy.wrap($body)
        .find('username')
        .type('fake@email.com')
})
        
        //cy.get('username').type('Agent').should('have.value','Agent')
        //cy.get('password').type('pa$$w0rd')
        //cy.contains('Wachtwoord vergeten of veranderen?').click()
        
        
        //expect(true).to.equal(true)
    })
})