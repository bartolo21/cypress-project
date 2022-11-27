// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'


// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(function () {
    cy.fixture('noPasswordConfirmData').then(function (sampleDataOne) {
      this.sampleDataOne = sampleDataOne;
    })
})

beforeEach(function () {
    cy.fixture('correctSampleData').then(function (sampleDataTwo) {
      this.sampleDataTwo = sampleDataTwo;
    })
})

beforeEach(function () {
  cy.fixture('tooLongLastName').then(function (sampleDataFour) {
    this.sampleDataFour = sampleDataFour;
  })
})

beforeEach(function () {
  cy.fixture('improperPassConfirmation').then(function (sampleDataFive) {
    this.sampleDataFive = sampleDataFive;
  })
})

beforeEach(function () {
    cy.fixture('delayTime').then(function (delayTime) {
      this.delayTime = delayTime;
    })
})