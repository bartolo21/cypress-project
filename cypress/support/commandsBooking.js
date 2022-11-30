// commands for '../e2e/bookingTest.cy.js' file
import emptyMessageData from '../fixtures2/emptyMessage.json'
import tooLongPhone from '../fixtures2/tooLongPhone.json'
import tooShortSubject from '../fixtures2/tooShortSubject.json'
import improperMailFormat from '../fixtures2/improperMailFormat.json'
import properContactData from '../fixtures2/properContactData.json'


Cypress.Commands.add('openAndVerifyBookingPage', () => {
    cy.intercept('GET', 'https://automationintesting.online/branding/').as('verifyBookingPage');
    cy.visit(Cypress.env('bookingWWW'));
    cy.contains('Let me hack!').click();
    cy.wait('@verifyBookingPage').then(res => {
        expect(res.response.statusCode).to.eq(200);
     })   
})

Cypress.Commands.add('submitContactForm', () => {
    cy.get('[id="submitContact"]').click();
})

//test case 1 form error validation
Cypress.Commands.add('validateFormNoMessage', () => {
    cy.get('.alert-danger').contains('Message may not be blank');
})

//test case 2 form error validation
Cypress.Commands.add('validateFormTooLongPhone', () => {
    cy.get('.alert-danger').contains('Phone must be between 11 and 21 characters.');
})

//test case 3 form error validation
Cypress.Commands.add('validateFormTooShortSubject', () => {
    cy.get('.alert-danger').contains('Subject must be between 5 and 100 characters.');
})

//test case 4 form error validation
Cypress.Commands.add('validateFormInvalidEmail', () => {
    cy.get('.alert-danger').contains('musi być poprawnie sformatowanym adresem e-mail');
})

//test case 5 form validation
Cypress.Commands.add('validateFormProperData', () => {
    cy.get('.col-sm-5').contains('Thanks for getting in touch ');
})


Cypress.Commands.add('listenPost', () => {
    cy.intercept('POST', 'https://automationintesting.online/message/').as('verifyPostResponse');
})


//verify test case 1 endpoint response
Cypress.Commands.add('verifyPostResponseNoMessage', () => {
    cy.wait('@verifyPostResponse').then(res => {
        expect(res.response.statusCode).to.eq(400);
        expect(res.response.body.fieldErrors[0]).to.eq("Message must be between 20 and 2000 characters.");
    })
})

//verify test case 2 endpoint response
Cypress.Commands.add('verifyPostResponseTooLongPhone', () => {
    cy.wait('@verifyPostResponse').then(res => {
        // console.log(res);
        expect(res.response.statusCode).to.eq(400);
        expect(res.response.body.fieldErrors[0]).to.eq("Phone must be between 11 and 21 characters.");
    })
})

//verify test case 3 endpoint response
Cypress.Commands.add('verifyPostResponseTooShortSubject', () => {
    cy.wait('@verifyPostResponse').then(res => {
        // console.log(res);
        expect(res.response.statusCode).to.eq(400);
        expect(res.response.body.fieldErrors[0]).to.eq("Subject must be between 5 and 100 characters.");
    })
})

//verify test case 4 endpoint response
Cypress.Commands.add('verifyPostResponseInvalidEmail', () => {
    cy.wait('@verifyPostResponse').then(res => {
        // console.log(res);
        expect(res.response.statusCode).to.eq(400);
        expect(res.response.body.fieldErrors[0]).to.eq("musi być poprawnie sformatowanym adresem e-mail");
    })
})

//verify test case 5 endpoint response
Cypress.Commands.add('verifyPostResponseProperData', () => {
    cy.wait('@verifyPostResponse').then(res => {
        // console.log(res);
        expect(res.response.statusCode).to.eq(201);
    })
})


//test case 1 data
Cypress.Commands.add('fillFormNoMessage', () => {
    cy.get('[id="name"]').type(emptyMessageData.name);
    cy.get('[id="email"]').type(emptyMessageData.email);
    cy.get('[id="phone"]').type(emptyMessageData.phone);
    cy.get('[id="subject"]').type(emptyMessageData.subject);
    // cy.get('[id="description"]').type(emptyMessageData.message);
})

//test case 2 data
Cypress.Commands.add('fillFormTooLongPhone', () => {
    cy.get('[id="name"]').type(tooLongPhone.name);
    cy.get('[id="email"]').type(tooLongPhone.email);
    cy.get('[id="phone"]').type(tooLongPhone.phone);
    cy.get('[id="subject"]').type(tooLongPhone.subject);
    cy.get('[id="description"]').type(tooLongPhone.message);
})

//test case 3 data
Cypress.Commands.add('fillFormTooShortSubject', () => {
    cy.get('[id="name"]').type(tooShortSubject.name);
    cy.get('[id="email"]').type(tooShortSubject.email);
    cy.get('[id="phone"]').type(tooShortSubject.phone);
    cy.get('[id="subject"]').type(tooShortSubject.subject);
    cy.get('[id="description"]').type(tooShortSubject.message);
})

//test case 4 data
Cypress.Commands.add('fillFormInvalidEmail', () => {
    cy.get('[id="name"]').type(improperMailFormat.name);
    cy.get('[id="email"]').type(improperMailFormat.email);
    cy.get('[id="phone"]').type(improperMailFormat.phone);
    cy.get('[id="subject"]').type(improperMailFormat.subject);
    cy.get('[id="description"]').type(improperMailFormat.message);
})

//test case 5 data
Cypress.Commands.add('fillFormProperData', () => {
    cy.get('[id="name"]').type(properContactData.name);
    cy.get('[id="email"]').type(properContactData.email);
    cy.get('[id="phone"]').type(properContactData.phone);
    cy.get('[id="subject"]').type(properContactData.subject);
    cy.get('[id="description"]').type(properContactData.message);
})

//clear previous data in form
Cypress.Commands.add('clearFormData', () => {
    cy.get('[id="name"]').clear();
    cy.get('[id="email"]').clear();
    cy.get('[id="phone"]').clear();
    cy.get('[id="subject"]').clear();
    cy.get('[id="description"]').clear();
})