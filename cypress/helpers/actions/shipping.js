export function setShippingInfo(user) {
    cy.get('[name="company"]').should('be.visible').type(user.company)
    cy.get('[name="street[0]"]').type(user.address)
    cy.get('[name="country_id"]').select(user.country)
    cy.get('[name="city"]').type(user.city)
    cy.get('[name="region_id"]').type(user.province)
    cy.get('[name="postcode"]').type(user.zip)
    cy.get('[name="telephone"]').type(user.phoneNumber)
    cy.get('[type="radio"]').first().click()
    cy.get('[data-role="opc-continue"]').click();
}