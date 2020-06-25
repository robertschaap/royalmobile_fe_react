context('Home Page', () => {
  before(() => {
    cy.server()
      .visit('/');
  });

  it('should skip navigation', () => {
    cy.getTestId('button-secondary')
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
    cy.getTestId('product-listing').within(() => {
      cy.get('a')
        .last()
        .click();
    });

    cy.url()
      .should('include', '/product/');
  });
});
