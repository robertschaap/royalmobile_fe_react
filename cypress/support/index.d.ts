declare namespace Cypress {
  interface Chainable<Subject> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getTestId(dataTestId: string): Chainable<any>;
  }
}
