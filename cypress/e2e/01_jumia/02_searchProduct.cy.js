describe("Search Product Test", ()=>{
    let productData;
    let searchData;
    before(()=>{
        cy.fixture('searchProductData').then((data) => {
            productData = data;
        })
    })

    beforeEach(()=>{
        cy.visit("/");
    })

    it("should fail when invalid search product param is entered", ()=>{
        searchData = productData.invalidParam

        cy.searchForProduct(searchData);

        cy.url().should('include', `/catalog/?q=${searchData}`)
        cy.request('https://www.jumia.com.ng/').its('status')
            .should('eq', 200);
        cy.get('.-tac > .-fs16').should('be.visible')
            .and('contain.text', `There are no results for “${searchData.toLowerCase()}”.`)

        cy.get('.-ws-pl').should('exist').and('be.visible')
    })

    it("should not search for an empty product name", ()=>{
        searchData = productData.emptyInput

        cy.searchForProduct(searchData);

        cy.url().should('not.include', `/catalog/?q=${searchData}`)
        cy.url().should('eq', 'https://www.jumia.com.ng/')
        cy.request('https://www.jumia.com.ng/').its('status')
            .should('eq', 200);
    })

    it("should successfully search for a product with a valid product name", ()=>{
        searchData = productData.validProductName

        cy.searchForProduct(searchData);

        const encodedSearchData = encodeURIComponent(searchData).replace(/%20/g, '+');

        cy.url().should('include', `/catalog/?q=${encodedSearchData}`)
        cy.request('https://www.jumia.com.ng/').its('status')
            .should('eq', 200);
        cy.get('.card > .row').should('be.visible');

        cy.get('.core').its('length').then((productCount) => {
            cy.log(`Number of products displayed: ${productCount}`);
            expect(productCount).to.be.greaterThan(0);
        });
    })

    it("should successfully search for a product with a valid product brand", ()=>{
        searchData = productData.validProductBrand
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

    it("should successfully search for a product when search data contains exactly one character", ()=>{
        searchData = productData.oneCharacter
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

    it("should throw an error when search data contains lengthy characters", ()=>{
        searchData = productData.lengthyInput
        cy.searchForProduct(searchData);
        const encodedSearchData = encodeURIComponent(searchData).replace(/%20/g, '+');

        cy.url().should('include', `/catalog/?q=${encodedSearchData}`)
        cy.request('https://www.jumia.com.ng/').its('status')
            .should('eq', 200);
        cy.get('.-tac > .-fs16').should('be.visible')
            .and('contain.text', `There are no results for “${searchData.toLowerCase()}”.`)

        cy.get('.-ws-pl').should('exist').and('be.visible')
    })

    it("should successfully search for a product with a valid product category", ()=>{
        searchData = productData.validProductCategory
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

    it("should successfully search for product in all upper case letters", ()=>{
        searchData = productData.allUppercaseInput
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

    it("should suggest and successfully search product for incorrectly spelled product name", ()=>{
        searchData = productData.misSpelledProductName
        cy.searchForProduct(searchData);

        cy.url().should('include', `/catalog/?q=${searchData}`)
        cy.request('https://www.jumia.com.ng/').its('status')
            .should('eq', 200);
        cy.request('https://www.jumia.com.ng/').its('status').should('eq', 200);
        cy.get('.card > .row').should('be.visible');

        cy.get('.core').its('length').then((productCount) => {
            cy.log(`Number of products displayed: ${productCount}`);
            expect(productCount).to.be.greaterThan(0);
        });
    })
})