import routes from '../../src/constants/routes';

context('Homepage', () => {
  before(() => {
    cy.server();
    cy.visit(routes.ORDER_DETAILS_PAGE);
  });

  it('should skip navigation', () => {
    cy
      .getTestId('button-secondary')
      .first()
      .focus()
      .click();
  });
});
