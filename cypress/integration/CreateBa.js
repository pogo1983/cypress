//import LoginGui from '../integration/LoginGui' --later

describe('CreateBa', () => {
    it('LOGIN TO TIM GUI', () => {
        cy.visit("https://07-tim.imfint.local")
        //login to TIM GUI
        cy.contains('Log in').click()
        cy.url().should('include','login')
        cy.get('#username').type('Agent').should('have.value','Agent')
        cy.get('#password').type('pa$$w0rd')
        cy.get('input.btn').click()
        cy.get('h2.ng-binding').should('contain','GUI')
        //move to Providers tab
        cy.get('a[href="Providers"]').click()
        cy.url().should('include','Providers')
        cy.get('.action-link').click()
        //wait for coockies
        cy.wait(2000)
        //Create BA , tab details
        cy.get('div.col-xs-6:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)')
        .type('POGO BA ZH TEST')
        cy.get(':nth-child(4) > :nth-child(1) > .col-xs-7 > .form-control')
        .type('NL35RABO0117713678')
        cy.get('div.col-xs-6:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)')
        .click()
        cy.get('ul.dropdown-menu:nth-child(1) > li:nth-child(3) > a:nth-child(1)').click()
        cy.get('#comment').type('POGO TEST BA ZH')
        //tab BA address
        cy.get('li.ng-isolate-scope:nth-child(2) > a:nth-child(1)').click()
        cy.get(':nth-child(1) > :nth-child(2) > .col-xs-8 > .form-group > .col-xs-7 > .form-control').type('Matejki')
        cy.get(':nth-child(1) > :nth-child(2) > .col-xs-8 > .form-group > .col-xs-3 > .form-control').type('6')
        cy.get(':nth-child(1) > :nth-child(3) > .col-xs-8 > .form-group > .col-xs-3 > .form-control').type('1212AA')
        cy.get(':nth-child(1) > :nth-child(3) > .col-xs-8 > .form-group > .col-xs-9 > .form-control').type('Gdansk')
        //tab Ba contact
        cy.get('[heading="Contact"] > .ng-binding').click()
        cy.get(':nth-child(6) > :nth-child(1) > .col-xs-8 > .form-control').type('pogotest@pogo.pl')
        cy.get('[ng-click="saveOrUpdate($event)"]').click()
        cy.wait(1000)
        cy.get('div.col-xs-8:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)').should('contain','ZH')
        //create activation
        cy.get('li.ng-isolate-scope:nth-child(5) > a:nth-child(1)').click()
        cy.get('div.ng-grid-column-action-alignment:nth-child(1) > a:nth-child(2)').click()
        cy.get('p.ng-binding:nth-child(2)').should('contain','ZH')
        cy.get('div.btn-group:nth-child(3) > button:nth-child(1)').click()
        //chose Uitgebreid
        cy.get('div.btn-group:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1) > span:nth-child(1)').click()
        cy.get('div.btn-group:nth-child(6) > button:nth-child(1)').click()
        //chose 3rd party factoring
        cy.get('div.btn-group:nth-child(6) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1) > span:nth-child(1)').click()
        cy.get('div.btn-group:nth-child(9) > button:nth-child(1)').click()
        //chose IZ
        cy.get('div.btn-group:nth-child(9) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1) > span:nth-child(1)').click()
        cy.get('div.btn-group:nth-child(12) > button:nth-child(1)').click()
        //chose MZC
        cy.get('div.btn-group:nth-child(12) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1) > span:nth-child(1)').click()
        cy.wait(6000)
        //add prices
        cy.get('div.ngRow:nth-child(2) > div:nth-child(7) > div:nth-child(2) > div:nth-child(1)').click().type('1')
        cy.get('div.ngRow:nth-child(4) > div:nth-child(7) > div:nth-child(2) > div:nth-child(1)').click().type('1.2')
        cy.get('div.ngRow:nth-child(8) > div:nth-child(7) > div:nth-child(2) > div:nth-child(1)').click().type('1.3')
        cy.get('div.ngRow:nth-child(10) > div:nth-child(7) > div:nth-child(2) > div:nth-child(1)').click().type('1.4')
        cy.wait(1000)
        cy.get('button.pull-right:nth-child(1)').click()
        //submitting parties
        cy.get('.contract-participants-grid > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').should('contain','ZH')
        //edit party
        cy.get('div.col10:nth-child(1) > a:nth-child(1)').click()
        //cy.contains('Instituut').click()
        //.select('Instituut')
        //cy.contains('Infomedics TIM GUI').should('include','GUI')
        //expect('Infomedics TIM GUI').to.equal('Infomedics TIM GUI')
        //expect(true).to.equal(true)
    })

    // it ('Create BA POGO ZH', () => {
    //     cy.get('a[href="Providers"]').click()
    //     cy.url().should('include','Providers')
    //     cy.contains('create business Account').click()
    // }
    // )
})