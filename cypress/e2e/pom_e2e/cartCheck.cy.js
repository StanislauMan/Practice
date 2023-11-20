///<reference types='cypress' />
import HomePage from "../../pageObjects/HomePage";
import CartPage from "../../pageObjects/CartPage";


describe ('cartCheck', () => {

    beforeEach (() => {
        cy.visit('https://www.onliner.by/');
    })

    const homePage = new HomePage();
    const cartPage = new CartPage();

    it('Click the cart sign', () => {
        homePage.clickCartButton()
                .checkCartPageUrl()
                .checkCartPageHeader();
    })
})