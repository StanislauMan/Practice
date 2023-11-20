///<reference types='cypress' />

describe ('Onliner test', () => {
    beforeEach(() => {
        cy.visit('https://www.onliner.by/');
    })
    
    it('Verify link', () => {
        cy.url().should('include', '/www.onliner.by/');
    });

    it('Verify logo', () => {
        cy.get('.onliner_logo').should('be.visible');
    });

    it('Scroll to footer', () => {
        cy.get('.footer-style').scrollIntoView();
        cy.get('.footer-style__logo').should('be.visible');
    })

    it.only('Search', () => {
        cy.get('.fast-search__input').as('searchField');
        cy.get('@searchField').type('iPhone');
        cy.get('.modal-iframe')
          .its('0.contentDocument')
          .its('body')
          .find('.text_match')
          .should('have.text', 'iPhone');
    })

    it.only('Close the search iFrame', () => {
        cy.get('.fast-search__input')
          .as('searchField');
        cy.get('@searchField')
          .type('iPhone');
        cy.get('.modal-iframe')
          .its('0.contentDocument')
          .its('body')
          .find('.search__close')
          .click()
        cy.get('.modal-iframe')
          .should('not.be.visible');
    })
})