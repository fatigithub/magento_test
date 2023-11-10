import { signUpForm } from '../selectors/signup'

export function createAccount(user) {
    cy.get(".header").contains("Create an Account").click()
    cy.get(signUpForm.firstName).type(user.firstName)
    cy.get(signUpForm.lastName).type(user.lastName)
    cy.get(signUpForm.password).type('Azer');
    cy.get(signUpForm.passwordStrength).contains('Weak')
    cy.get(signUpForm.password).type('1234');
    cy.get(signUpForm.passwordStrength).contains('Medium')
    cy.get(signUpForm.password).type('@');
    cy.get(signUpForm.passwordStrength).contains('Strong')
    cy.get(signUpForm.passwordConfirmation).type('Azer1234@')
    cy.get(signUpForm.email).type(`${user.firstName}.${user.lastName}@yopmail.com`)
    cy.get(signUpForm.submitBtn).should('not.be.disabled').click()
}

export function verifyUserLoggedUp(user) {
    cy.get('.message-success').contains('Thank you for registering with Main Website Store.')
    cy.contains(`Welcome, ${user.firstName} ${user.lastName}`).should('be.visible')
}