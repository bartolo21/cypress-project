//commands for this test scenario can be found inside ./support/commandsBooking.js

describe("Room booking tool validation testing", () => {
    it("Open the website, open booking section and verify", () => {
        cy.openAndVerifyBookingPage();
    })
})