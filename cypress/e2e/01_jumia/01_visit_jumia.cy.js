describe("Navigate To Jumia Site Test", ()=>{
    it("should successfully navigate to the ecommerce site", ()=>{
        cy.visit("/");
        cy.url().should('eq', 'https://www.jumia.com.ng/');
        cy.title().should('include', 'Jumia Nigeria');
        cy.request('https://www.jumia.com.ng/').its('status')
            .should('eq', 200);
        cy.get('input[name="q"]').should('be.visible')
            .and('be.enabled');
        cy.get('a[href="/cart/"]').should('exist');
        cy.contains('Sign In').should('exist');
        cy.contains('My Account').should('exist');
        cy.contains('Orders').should('exist');
        cy.contains('Saved Items').should('exist');
        cy.contains('Terms & Conditions').should('exist');
    })
})