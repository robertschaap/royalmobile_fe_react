import routes from '../../src/constants/routes';

context('Homepage', () => {
  before(() => {
    cy.server();
    cy.visit(routes.ORDER_PAGE);
  });

  it('should skip navigation', () => {
    cy
      .get('[data-testid="button-secondary"]')
      .first()
      .focus()
      .click();
  });
});
