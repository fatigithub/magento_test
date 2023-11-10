export function homePageVerification() {
    checkHeader()
    checkFooter()
}

export function checkFooter() {
    cy.get('.page-footer')
        .should('contain.text', 'Write for us')
        .and('contain.text', 'Subscribe to our mailing list')
        .and('contain.text', 'Contact us')
        .and('contain.text', 'Hire a Sofware Testing/QA Company')
        .and('contain.text', 'Search Terms')
        .and('contain.text', 'Privacy and Cookie Policy')
        .and('contain.text', 'Advanced Search')
}

export function checkHeader() {
    cy.get('.logo').should('be.visible').click();
    cy.get('.ui-menu').contains(`What's New`)
    cy.get('.ui-menu').contains(`Women`)
    cy.get('.ui-menu').contains(`Men`)
    cy.get('.ui-menu').contains(`Gear`)
    cy.get('.ui-menu').contains(`Training`)
    cy.get('.ui-menu').contains(`Sale`)
}