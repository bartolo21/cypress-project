// w obu testach (tym oraz bonusowym 'bookingTest.cy.js'), używałem angielskich opisów i zmiennych z racji, że to standard
// ten test można potraktować jako główny (pisałem go pierwszego), ale drugi, bonusowy jest bardziej przemyślany i ułożony
// dla obu testów wykorzystałem inne strony (tutaj form rejestracji, w drugim formularz kontaktowy)

describe("Register form automation testing", () => {
  it("Open the website, get to the 'Register' Tab and verify endpoint response", () => {
    cy.visit("/index.htm");
    cy.verifyResponse200("GET", '/index.htm');
    cy.get('a[href*="register.htm"]').click();
    cy.verifyResponse200("GET", '/register.htm');
  });

  it("CASE 1: Fill the registration form with no password confirmation", function () {    
    cy.fillFormTestCaseOne();
    cy.registerSubmit();
    cy.get('[id="rightPanel"]').contains('An internal error has occurred and has been logged.')
    cy.clearLocalStorage();
  })

  it("CASE 2 (successful): Fill the registration form with the proper data", function () {
    cy.visit("/register.htm");
    cy.fillFormTestCaseTwoAndThree();
    cy.registerSubmit();
    cy.get('[id="rightPanel"]').contains('Your account was created successfully. You are now logged in.')
    cy.logout();
    cy.clearLocalStorage();
  })

  it("CASE 3: Fill the registration form with previously taken username", function () {
    cy.visit("/register.htm");
    cy.fillFormTestCaseTwoAndThree();
    cy.registerSubmit();
    cy.get('[id="customerForm"]').contains('This username already exists.')
    cy.clearLocalStorage();
  })

  it("CASE 4: Fill the registration form with too long last name to handle", function () {
    cy.visit("/register.htm");
    cy.fillFormTestCaseFour();
    cy.registerSubmit();
    cy.get("body").contains("413 Request Entity Too Large");
    cy.clearLocalStorage();
  })

  it("CASE 5: Fill the registration form with improper password confirmation", function () {
    cy.visit("/register.htm");
    cy.fillFormTestCaseFive();
    cy.registerSubmit();
    cy.get('[id="repeatedPassword.errors"]').contains("Passwords did not match.");
    cy.clearLocalStorage();
  })

  it("Clears the database before running the test again", () => {
    cy.clearDatabase();
  });
});
