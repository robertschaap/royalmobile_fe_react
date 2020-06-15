declare namespace Cypress {
  interface Chainable<Subject> {
    getTestId(dataTestId: string): Chainable<any>;
  }
}
