import routes from '../../src/constants/routes';

context('Homepage', () => {
  before(() => {
    cy.server();
    cy.visit(routes.HOME_PAGE);
  });

  it('should skip navigation', () => {
    cy
      .get('[data-testid="button-secondary"]')
      .first()
      .focus()
      .click();
  });

  it('should load more products when the load more button is clicked', () => {
    cy.get('[data-testid="product-listing"]')
      .siblings('[data-testid="button-secondary"]')
      .click();
  });

  it('should go to the product page when a product is clicked', () => {
    cy.get('[data-testid="product-listing"] a')
      .last()
      .click();

    cy.url().should('include', '/product/');
  });
});