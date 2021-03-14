context('Order Details Page', () => {
  before(() => {
    cy.server()
      .visit('/product/apple-iphone12')
      .getTestId('place-order-button')
      .click()
      .getTestId('button-primary')
      .click();
  });

  it('should submit an order', () => {
    cy.fillForm({
      initials: 'T',
      lastname: 'Test',
      email: 't@test.com',
      zipcode: '123456',
      housenumber: '123',
      iban: 'NLABCD1234567890',
    });

    cy.getTestId('finalise-order-button')
      .click();

    cy.url()
      .should('include', '/thankyou');
  });
});
