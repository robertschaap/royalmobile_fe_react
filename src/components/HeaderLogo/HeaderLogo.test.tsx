import { fireEvent } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import HeaderLogo from '.';

describe('<HeaderLogo />', () => {
  it('should redirect the user when clicked on', () => {
    const { getByTestId } = renderWithProviders(<HeaderLogo />);

    fireEvent.click(getByTestId('header-logo'));

    expect(window.location.pathname).toEqual('/');
  });
});
