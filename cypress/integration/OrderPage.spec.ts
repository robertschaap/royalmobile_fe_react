import routes from '../../src/constants/routes';

context('Homepage', () => {
  before(() => {
    cy.server();
    cy.visit(routes.ORDER_PAGE);
  });
});
