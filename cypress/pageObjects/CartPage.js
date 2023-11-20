class CartPage {
    getCartPageHeader = () => cy.get('.cart-form__title');
    getCartPageUrl = () => cy.url('https://cart.onliner.by/');


    checkCartPageHeader () {
        this.getCartPageHeader().should('be.visible');

        return this;
    }

    checkCartPageUrl () {
        this.getCartPageUrl().should('deep.equal', 'https://cart.onliner.by/')

        return this;
    }
}
export default CartPage;