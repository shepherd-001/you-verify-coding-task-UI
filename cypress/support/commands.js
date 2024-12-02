Cypress.Commands.add('searchForProduct', (product) => {
    cy.get('#fi-q').should('be.visible').clear();

    if (product)
        cy.get('#fi-q').type(product).should('have.value', product);

    cy.get('#search > .btn').should('be.enabled').click();
});

Cypress.Commands.add('addProductToCart', (productIndex) => {
    cy.get('.core').eq(productIndex)
        .should('be.visible').click();

    cy.get('#add-to-cart > .add').should('be.visible')
        .and('be.enabled').click();
});