// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('verifyResponse200', (method, endpoint) => {
    cy.request(method, endpoint).then((response) => {
        expect(response.status).to.eq(200);
      });
})

// trying to verify api register 500 nie wiem
Cypress.Commands.add('confirmRegisterFail', (method, endpoint) => {
    cy.request(method, endpoint, {failOnStatusCode: false}).then((response) => {
        expect(response.status).to.eq(500);
      });
})

Cypress.Commands.add('registerSubmit', () => {
    cy.get('[value="Register"]').click();
})

Cypress.Commands.add('logout', () => {
    cy.get('[href="/parabank/logout.htm"]').click();
    cy.url().should('include', '/index.htm');
})

Cypress.Commands.add('clearDatabase', () => {
    cy.visit('/admin.htm');
    cy.get('[value="CLEAN"]').click();
    cy.contains("Database Cleaned");
}) 

Cypress.Commands.add('fillFormTestCaseOne', function () {
    cy.get('[id="customer.firstName"]').type(this.sampleDataOne.firstName, {delay: this.delayTime.delay});
    cy.get('[id="customer.lastName"]').type(this.sampleDataOne.lastName, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.street"]').type(this.sampleDataOne.address, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.city"]').type(this.sampleDataOne.city, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.state"]').type(this.sampleDataOne.state, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.zipCode"]').type(this.sampleDataOne.zipCode, {delay: this.delayTime.delay});
    cy.get('[id="customer.phoneNumber"]').type(this.sampleDataOne.phone, {delay: this.delayTime.delay});
    cy.get('[id="customer.ssn"]').type(this.sampleDataOne.ssn, {delay: this.delayTime.delay});
    cy.get('[id="customer.username"]').type(this.sampleDataOne.username, {delay: this.delayTime.delay});
    cy.get('[id="customer.password"]').type(this.sampleDataOne.password, {delay: this.delayTime.delay});
    // cy.get('[id="repeatedPassword"]').type(this.sampleDataOne.passwordConfirm, {delay: this.delayTime.delay});
})

Cypress.Commands.add('fillFormTestCaseTwoAndThree', function () {
    cy.get('[id="customer.firstName"]').type(this.sampleDataTwo.firstName, {delay: this.delayTime.delay});
    cy.get('[id="customer.lastName"]').type(this.sampleDataTwo.lastName, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.street"]').type(this.sampleDataTwo.address, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.city"]').type(this.sampleDataTwo.city, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.state"]').type(this.sampleDataTwo.state, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.zipCode"]').type(this.sampleDataTwo.zipCode, {delay: this.delayTime.delay});
    cy.get('[id="customer.phoneNumber"]').type(this.sampleDataTwo.phone, {delay: this.delayTime.delay});
    cy.get('[id="customer.ssn"]').type(this.sampleDataTwo.ssn, {delay: this.delayTime.delay});
    cy.get('[id="customer.username"]').type(this.sampleDataTwo.username, {delay: this.delayTime.delay});
    cy.get('[id="customer.password"]').type(this.sampleDataTwo.password, {delay: this.delayTime.delay});
    cy.get('[id="repeatedPassword"]').type(this.sampleDataTwo.passwordConfirm, {delay: this.delayTime.delay});
})

Cypress.Commands.add('fillFormTestCaseFour', function () {
    cy.get('[id="customer.firstName"]').type(this.sampleDataFour.firstName, {delay: this.delayTime.delay});
    cy.get('[id="customer.lastName"]').type(this.sampleDataFour.lastName, {delay: 1});
    cy.get('[id="customer.address.street"]').type(this.sampleDataFour.address, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.city"]').type(this.sampleDataFour.city, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.state"]').type(this.sampleDataFour.state, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.zipCode"]').type(this.sampleDataFour.zipCode, {delay: this.delayTime.delay});
    cy.get('[id="customer.phoneNumber"]').type(this.sampleDataFour.phone, {delay: this.delayTime.delay});
    cy.get('[id="customer.ssn"]').type(this.sampleDataFour.ssn, {delay: this.delayTime.delay});
    cy.get('[id="customer.username"]').type(this.sampleDataFour.username, {delay: this.delayTime.delay});
    cy.get('[id="customer.password"]').type(this.sampleDataFour.password, {delay: this.delayTime.delay});
    cy.get('[id="repeatedPassword"]').type(this.sampleDataFour.passwordConfirm, {delay: this.delayTime.delay});
})

Cypress.Commands.add('fillFormTestCaseFive', function () {
    cy.get('[id="customer.firstName"]').type(this.sampleDataFive.firstName, {delay: this.delayTime.delay});
    cy.get('[id="customer.lastName"]').type(this.sampleDataFive.lastName, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.street"]').type(this.sampleDataFive.address, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.city"]').type(this.sampleDataFive.city, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.state"]').type(this.sampleDataFive.state, {delay: this.delayTime.delay});
    cy.get('[id="customer.address.zipCode"]').type(this.sampleDataFive.zipCode, {delay: this.delayTime.delay});
    cy.get('[id="customer.phoneNumber"]').type(this.sampleDataFive.phone, {delay: this.delayTime.delay});
    cy.get('[id="customer.ssn"]').type(this.sampleDataFive.ssn, {delay: this.delayTime.delay});
    cy.get('[id="customer.username"]').type(this.sampleDataFive.username, {delay: this.delayTime.delay});
    cy.get('[id="customer.password"]').type(this.sampleDataFive.password, {delay: this.delayTime.delay});
    cy.get('[id="repeatedPassword"]').type(this.sampleDataFive.passwordConfirm, {delay: this.delayTime.delay});
})