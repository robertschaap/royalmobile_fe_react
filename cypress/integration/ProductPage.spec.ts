context('Product Page', () => {
  before(() => {
    cy.server();
    cy.visit('/product/apple-iphonex');
  });

  it('should select a color when one is clicked', () => {
    cy.getTestId('device-color-listing')
      .children()
      .random()
      .click();
  });

  it('should select a device capacity when one is clicked', () => {
    cy.getTestId('device-capacity-listing')
      .children()
      .random()
      .click();
  });

  it('should select a duration when one is clicked', () => {
    cy.getTestId('duration-listing')
      .children()
      .random()
      .click();
  });

  it('should select a subscription when one is clicked', () => {
    cy.getTestId('subscription-listing')
      .children()
      .random()
      .click();
  });

  it('should toggle payment plan options when the toggle button is clicked', () => {
    cy.getTestId('toggle')
      .click();
  });

  it('should go to the order page when the submit button is clicked', () => {
    cy.getTestId('button-primary')
      .click();

    cy.url().should('include', '/order');
  });
});
