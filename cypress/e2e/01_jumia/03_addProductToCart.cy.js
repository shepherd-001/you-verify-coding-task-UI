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

        cy.get('.core').its('length').then((productCount) => {
            cy.log(`Number of products displayed: ${productCount}`);
            expect(productCount).to.be.greaterThan(0);
        });
    })
})
