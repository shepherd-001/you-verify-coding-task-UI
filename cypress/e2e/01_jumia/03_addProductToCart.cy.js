describe('Add Product To Cart Test', ()=>{
    let searchData;

    beforeEach(()=>{
        cy.visit('/');
    })


    it('should successfully add a single product to cart', ()=>{
        searchData = "Laptop"
        cy.searchForProduct(searchData);

        cy.url().should('include', `/catalog/?q=${searchData}`)
        cy.request('https://www.jumia.com.ng/').its('status')
            .should('eq', 200);
        cy.get('.card > .row').should('be.visible');

        cy.get('.core').its('length').then((count) => {
            cy.log(`Number of products displayed: ${count}`);
            expect(count).to.be.greaterThan(0);

            cy.get('.col > .-gy9').should('be.visible').click()
            cy.url().should('include', '/cart/');
            cy.get('.card').its('length').then((initialCount) => {
                cy.log(`Initial number of products in the cart: ${initialCount}`);

                cy.addProductToCart(getProductIndex(initialCount));

                cy.get('.cnt').should('be.visible')
                    .and('contain', 'Product added successfully');

                cy.get('.col12 > .card > :nth-child(*)').its('length').then((finalCount) => {
                    cy.log(`Final number of products in the cart count: ${finalCount}`);
                    expect(finalCount).to.equal(initialCount + 1);
                });
            });
        });
    });
});

let getProductIndex = (length)=>{
    return Math.floor(Math.random() * (length + 1));
}
