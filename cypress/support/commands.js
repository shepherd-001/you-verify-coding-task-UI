Cypress.Commands.add('searchForProduct', (product) => {
    cy.get('#fi-q').should('be.visible').clear();

    if (product)
        cy.get('#fi-q').type(product).should('have.value', product);

    cy.get('#search > .btn').should('be.enabled').click();
});