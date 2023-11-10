const faker = require('@faker-js/faker')

import { createAccount, verifyUserLoggedUp } from "../helpers/actions/createAccount"
import { homePageVerification } from "../helpers/actions/homePage"
import { addProduct } from "../helpers/actions/addProduct"
import { setShippingInfo } from "../helpers/actions/shipping"
import { paymentMethod, verifyTotal, verifyPurchase } from "../helpers/actions/paymentMethod"
import { logout } from "../helpers/actions/logout"

const user = {
    firstName: faker.faker.person.firstName(),
    lastName: faker.faker.person.lastName(),
    company: faker.faker.company.name(),
    address: faker.faker.location.streetAddress(),
    phoneNumber: faker.faker.phone.number('0766666666'),
    country: 'France',
    zip: '52993',
    city: 'Paris',
    province: 'Paris'
}

const testProduct = {
    name: 'Radiant Tee',
    qty: 2,
    price: 22,
    color: 'Blue',
    shippingPrice: 10,
}

describe('Technical Test ', () => {
    before(() => {
        // clear cookies
        cy.clearCookies()
        cy.visit('/')
    })

    it("should create an account then verify homepage", () => {
        // create of new account
        createAccount(user)
        // verification
        verifyUserLoggedUp(user)
        // home page element verification
        homePageVerification()
    })

    it("should user complete checkout", () => {
        // add a product
        addProduct(testProduct)
        cy.visit('/checkout/#shipping')
        // filling infos for the order
        setShippingInfo(user)
        // verfication of user informations
        paymentMethod(user)
        // verfication of the price
        verifyTotal(testProduct)
        // place the order
        cy.get('[title="Place Order"]').click();
        // order confirmation
        verifyPurchase()
        // logout
        logout()

    })
})