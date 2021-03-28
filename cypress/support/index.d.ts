declare namespace Cypress {
  interface Chainable<Subject> {
    getTestId(dataTestId: string): Chainable<Element>;
    fillForm(object: Record<string, string>): Chainable<Element>;
    random(): Chainable<Element>;
  }
}
