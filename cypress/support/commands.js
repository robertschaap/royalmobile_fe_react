Cypress.Commands.add('getTestId', (dataTestId) => {
  cy.get(`[data-testid=${dataTestId}]`);
});
