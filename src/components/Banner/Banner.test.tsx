import { fireEvent } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import Banner from '.';

describe('<Banner />', () => {
  it('should redirect the user when clicked on', () => {
    const { getByTestId } = renderWithProviders(<Banner />);

    fireEvent.click(getByTestId('banner'));

    expect(window.location.pathname).toContain('/campaigns');
  });
});
