/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="email"]').should('be.visible');
    cy.get('input[placeholder="password"]').should('be.visible');
    cy.get('input[type="submit"][value="Login"]').should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('input[type="submit"][value="Login"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="email"]').type('testuser@gmail.com');
    cy.get('input[type="submit"][value="Login"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="email"]').type('testuser@gmail.com');
    cy.get('input[placeholder="password"]').type('testpassword');
    cy.get('input[type="submit"][value="Login"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    cy.get('input[placeholder="email"]').type('jhon.doe@example.com');
    cy.get('input[placeholder="password"]').type('12345678');
    cy.get('input[type="submit"][value="Login"]').click();
    cy.get('a').contains(/^Logout$/);
  });
});
