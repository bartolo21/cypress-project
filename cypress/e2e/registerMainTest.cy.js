// <reference types="cypress" />

describe("Register form automation testing", () => {
  it("Open the website, get to the 'Register' Tab and verify endpoint response", () => {
      //opens the main page
    cy.visit("/index.htm");
      //verifies if the main page was opened
    cy.verifyResponse200("GET", '/index.htm');
    cy.get('a[href*="register.htm"]').click();
    cy.verifyResponse200("GET", '/register.htm');
  });

  //test case number 1
  it("CASE 1: Fill the registration form with no password confirmation", function () {    
    cy.fillFormTestCaseOne();
    cy.registerSubmit();
    cy.get('[id="rightPanel"]').contains('An internal error has occurred and has been logged.')
    cy.clearLocalStorage();
  })

  //test case number 2
  it("CASE 2 (successful): Fill the registration form with the proper data", function () {
    cy.visit("/register.htm");
    cy.fillFormTestCaseTwoAndThree();
    cy.registerSubmit();
    cy.get('[id="rightPanel"]').contains('Your account was created successfully. You are now logged in.')
    cy.logout();
    cy.clearLocalStorage();
  })

  //test case number 3
  it("CASE 3: Fill the registration form with previously taken username", function () {
    cy.visit("/register.htm");
    cy.fillFormTestCaseTwoAndThree();
    cy.registerSubmit();
    cy.get('[id="customerForm"]').contains('This username already exists.')
    cy.clearLocalStorage();
  })

  //test case number 4
  it("CASE 4: Fill the registration form with too long last name to handle", function () {
    cy.visit("/register.htm");
    cy.fillFormTestCaseFour();
    cy.registerSubmit();
    cy.get("body").contains("413 Request Entity Too Large");
    cy.clearLocalStorage();
  })

  //test case number 5
  it("CASE 5: Fill the registration form with improper password confirmation", function () {
    cy.visit("/register.htm");
    cy.fillFormTestCaseFive();
    cy.registerSubmit();
    cy.get('[id="repeatedPassword.errors"]').contains("Passwords did not match.");
    cy.clearLocalStorage();
  })

  //clears the local database
  it("Clears the database before running the test again", () => {
    cy.clearDatabase();
  });
});

// przypadek 1:
// rejestracja z pustym inputem do potwierdzenia hasła

// przypadek 2:
// rejestracja prawidłowa

// przypadek 3:
// rejestracja z zajętą wcześniej nazwą użytkownika

// przypadek 4:
// rejestracja ze zbyt długą nazwą w polu nazwiska

// przypadek 5:
// rejestracja z niepoprawnym hasłem potwierdzającym