context('Order Page', () => {
  beforeEach(() => {
    cy.server()
      .visit('/product/apple-iphonex')
      .getTestId('place-order-button')
      .click();
  });

  it('should remove a cartItem when the remove button is clicked', () => {
    cy.getTestId('cart-item-remove-button')
      .click();

    cy.getTestId('error-message')
      .should('be.visible');
  });

  it('should go to the order details page when the payment button is clicked', () => {
    cy.getTestId('button-primary')
      .click();

    cy.url()
      .should('include', '/order/details');
  });
});
