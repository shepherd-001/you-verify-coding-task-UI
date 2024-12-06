describe('Add Product To Cart Test', ()=>{
    let searchData;
    before(()=>{
        cy.fixture('searchProductData').then((data) => {
            searchData = data;
        })
    })


    it('should successfully add a single product to cart', () => {
        cy.visit('/');
        searchData = searchData.addProductData

        cy.get('.col > .-gy9').should('be.visible').click();
        cy.url().should('include', '/cart/');

        cy.get('body').then(($body) => {
            if ($body.find('.card > .prd > .core').length > 0) {
                cy.get('.card > .prd > .core').its('length').then((initialCount) => {
                    cy.log(`Initial number of products in the cart: ${initialCount}`);
                    addProductAndVerifyCart(searchData, initialCount);
                });
            } else {
                cy.log('Cart is empty');
                addProductAndVerifyCart(searchData, 0);
            }
        });

        const addProductAndVerifyCart = (searchData, initialCount)=> {
            cy.searchForProduct(searchData);
            cy.url().should('include', `/catalog/?q=${searchData}`);
            cy.request('https://www.jumia.com.ng/').its('status').should('eq', 200);
            cy.get('.card > .row').should('be.visible');

            cy.get('.core').its('length').then((productCount) => {
                cy.log(`Number of products displayed: ${productCount}`);
                expect(productCount).to.be.greaterThan(0);

                const randomProduct = getProductIndex(productCount);
                cy.addProductToCart(randomProduct);

                cy.get('.cnt').should('be.visible')
                    .and('contain', 'Product added successfully');

                cy.get('body').then(($newBody) => {
                    const finalCount = initialCount + 1;
                    if ($newBody.find('.card > .prd > .core').length > 0)
                        cy.get('.card > .prd > .core').its('length').should('eq', finalCount);

                    cy.log(`\n\nFinal number of products in the cart: ${finalCount}\n\n`);
                });
            });
        }
    });
});

const getProductIndex = (length)=>{
    return Math.floor(Math.random() * (length));
}
