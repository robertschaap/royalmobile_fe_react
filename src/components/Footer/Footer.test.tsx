import { fireEvent } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import Footer from '.';

describe('<Footer />', () => {
  it('should redirect the user to the contact page', () => {
    const { getByTestId } = renderWithProviders(<Footer />);

    fireEvent.click(getByTestId('footer-contact-link'));

    expect(window.location.pathname).toContain('/contact');
  });
});
