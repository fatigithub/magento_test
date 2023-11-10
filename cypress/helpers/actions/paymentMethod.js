
export function paymentMethod(user) {
    cy.get('.billing-address-details')
        .should('contain', user.firstName)
        .and('contain', user.lastName)
        .and('contain', user.address)
        .and('contain', user.phoneNumber)
        .and('contain', user.zip)
        .and('contain', user.city)
        .and('contain', user.country);
}

export function verifyTotal(testProduct) {
    const total = (testProduct.qty * testProduct.price) + testProduct.shippingPrice
    cy.get('.price').should('contain', total)
}

export function verifyPurchase() {
    cy.contains('Thank you for your purchase!')
    cy.get(".order-number").should("be.visible")
}