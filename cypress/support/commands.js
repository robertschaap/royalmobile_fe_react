Cypress.Commands.add('getTestId', (dataTestId) => {
  cy.get(`[data-testid=${dataTestId}]`);
});

Cypress.Commands.add('random', { prevSubject: true }, (subject) => {
  if (subject.length) {
    const random = Math.floor(Math.random() * subject.length);
    return subject[random];
  }

  return subject;
});

Cypress.Commands.add('fillForm', (formFields) => {
  Object.entries(formFields).forEach(([dataTestId, value]) => {
    cy.get(`[data-testid=${dataTestId}]`).type(value);
  });
});
