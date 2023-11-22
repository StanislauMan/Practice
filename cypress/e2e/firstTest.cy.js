///<reference types='cypress' />

import homePage from "../fixtures/pom_fixtures/homePage.json"

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

    it('Search', () => {
        cy.get('.fast-search__input').as('searchField');
        cy.get('@searchField').type('iPhone');
        cy.get('.modal-iframe')
          .its('0.contentDocument')
          .its('body')
          .find('.text_match')
          .should('have.text', 'iPhone');
    })

    it('Close the search iFrame', () => {
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

    it.only('Head menu check', () => {
      cy.get('.b-main-navigation').then(($els) => {
        const menuOptions = Cypress._.map(Cypress.$.makeArray($els), 'innerText').join('').split('\n');
        console.log(menuOptions);
        console.log(homePage.headMenuItems);
        expect(menuOptions).to.eql(homePage.headMenuItems);
      }) 
    })
})