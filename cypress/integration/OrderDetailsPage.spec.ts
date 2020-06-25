context('Order Details Page', () => {
  beforeEach(() => {
    cy.server()
      .visit('/product/apple-iphonex')
      .getTestId('place-order-button')
      .click()
      .getTestId('button-primary')
      .click();
  });

  it('should remove a cartItem when the remove button is clicked', () => {
    cy.getTestId('initials')
      .type('initials')
      .getTestId('lastname')
      .type('lastname')
      .getTestId('email')
      .type('email')
      .getTestId('zipcode')
      .type('zipcode')
      .getTestId('housenumber')
      .type('housenumber')
      .getTestId('iban')
      .type('iban');

    cy.getTestId('finalise-order-button')
      .click();

    cy.url()
      .should('include', '/thankyou');
  });
});
