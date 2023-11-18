///<reference types='cypress' />

describe ('Onliner test', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
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
        cy.pause();
        cy.get('.search__close').click();
        cy.pause();

    })
})