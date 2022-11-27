// commands for '../e2e/bookingTest.cy.js' file

Cypress.Commands.add('openAndVerifyBookingPage', () => {
    cy.intercept('GET', 'https://automationintesting.online/branding/').as('verifyBookingPage');
    cy.visit(Cypress.env('bookingWWW'));
    cy.contains('Let me hack!').click();
    cy.wait('@verifyBookingPage').then(res => {
        expect(res.response.statusCode).to.eq(200);
     })   
})