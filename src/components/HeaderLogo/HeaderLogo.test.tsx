import React from 'react';
import { fireEvent } from '@testing-library/react';
import HeaderLogo from '.';

import { renderWithProviders } from '../../test/helpers';

describe('<HeaderLogo />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<HeaderLogo />);
  });

  it('should redirect the user when clicked on', () => {
    const { getByTestId } = renderWithProviders(<HeaderLogo />);

    fireEvent.click(getByTestId('header-logo'));

    expect(window.location.pathname).toEqual('/');
  });
});
