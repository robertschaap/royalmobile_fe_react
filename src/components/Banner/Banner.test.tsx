import React from 'react';
import { fireEvent } from '@testing-library/react';
import Banner from '.';

import { renderWithProviders } from '../../test/helpers';

describe('<Banner />', () => {
  it('should redirect the user when clicked on', () => {
    const { getByTestId } = renderWithProviders(<Banner />);

    fireEvent.click(getByTestId('banner'));

    expect(window.location.pathname).toContain('/campaigns');
  });
});
