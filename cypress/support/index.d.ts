/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Cypress {
  interface Chainable<Subject> {
    getTestId(dataTestId: string): Chainable<any>;
    random(): Chainable<any>;
  }
}
