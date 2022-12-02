//commands for this test scenario can be found inside './support/commandsBooking.js'
// ten test jest dodatkowy, główny to test na rejestracji ale wykorzystałem tutaj trochę inne zabiegi
// plus działa tutaj pełna asercja dla endpointów z API :)
// wykorzystałem tutaj również inny sposób na import danych do DDT (komenda import, test rejestracji to beforeEach)

describe("Room booking tool validation testing.", () => {
    it("Open the website, open booking section and verify", () => {
        cy.openAndVerifyBookingPage();
    })

    it("Scroll contact form into view.", () => {
        cy.get('form').scrollIntoView();
    })

    it("CASE 1: Fill the form with data, leave 'Message' input empty.", () => {
        cy.listenPost();
        cy.fillFormNoMessage();
        cy.submitContactForm();
        cy.verifyPostResponseNoMessage();
        cy.validateFormNoMessage(); 
        cy.clearFormData();
    })

    it("CASE 2: Fill the form with data, make 'Phone' input longer than expected.", () => {
        cy.listenPost();
        cy.fillFormTooLongPhone();
        cy.submitContactForm();
        cy.verifyPostResponseTooLongPhone();
        cy.validateFormTooLongPhone();
        cy.clearFormData();
    })

    it("CASE 3: Fill the form with data, make 'Subject' input shorter than expected.", () => {
        cy.listenPost();
        cy.fillFormTooShortSubject();
        cy.submitContactForm();
        cy.verifyPostResponseTooShortSubject();
        cy.validateFormTooShortSubject(); 
        cy.clearFormData();
    })

    it("CASE 4: Fill the form with data, invalid email address.", () => {
        cy.listenPost();
        cy.fillFormInvalidEmail();
        cy.submitContactForm();
        cy.verifyPostResponseInvalidEmail();
        cy.validateFormInvalidEmail(); 
        cy.clearFormData();
    })

    it("CASE 5: Fill the form with data, proper data.", () => {
        cy.listenPost();
        cy.fillFormProperData();
        cy.submitContactForm();
        cy.verifyPostResponseProperData();
        cy.validateFormProperData(); 
    })
})