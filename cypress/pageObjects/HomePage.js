import CartPage from "./CartPage";

class HomePage {
    getSearchInputField = () => cy.get('.fast-search__input');
    getCartButton = () => cy.get('#userbar [title="Корзина"]')


    clickSearchInputField () {
        this.getSearchInputField().click();

        return this;
    }

    clickCartButton () {
        this.getCartButton().click();

        return new CartPage();
    }
}
export default HomePage;