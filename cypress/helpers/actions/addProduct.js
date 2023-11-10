export function addProduct(product) {
    cy.get('.product-item-info').should('be.visible').and('have.length', 6)
    cy.get('.product-item-info').first().click()
    cy.url().should('include', '/radiant-tee.html')
    cy.get('[option-tooltip-value="L"]').should('be.visible').click()
    cy.get(`[option-label="${product.color}"]`).should('be.visible').click()
    cy.get('#qty').clear().type(product.qty);
    cy.get('#product-addtocart-button').click();
    cy.get('[data-ui-id="message-success"]')
        .should('be.visible')
        .and('contain', product.name);
}