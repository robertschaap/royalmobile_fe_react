import React from 'react';
import { fireEvent } from '@testing-library/react';
import Footer from '.';

import { renderWithProviders } from '../../test/helpers';

describe('<Footer />', () => {
  it('should redirect the user to the contact page', () => {
    const { getByTestId } = renderWithProviders(<Footer />);

    fireEvent.click(getByTestId('footer-contact-link'));

    expect(window.location.pathname).toContain('/contact');
  });
});
