export function logout() {
    cy.visit('/customer/account/logout/')
    cy.contains('You are signed out')
}