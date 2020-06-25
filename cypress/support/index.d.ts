/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Cypress {
  interface Chainable<Subject> {
    getTestId(dataTestId: string): Chainable<any>;
    fillForm(object: Record<string, string>): Chainable<any>;
    random(): Chainable<any>;
  }
}
