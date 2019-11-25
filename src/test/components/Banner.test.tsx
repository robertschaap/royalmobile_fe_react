import React from 'react';
import { fireEvent } from '@testing-library/react';
import Banner from '../../components/Banner';

import { renderWithProviders } from '../helpers';

describe('<Banner />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Banner />);
  });

  it('should redirect the user when clicked on', () => {
    const { getByTestId } = renderWithProviders(<Banner />);

    fireEvent.click(getByTestId("banner"));

    expect(location.pathname).toContain('/campaigns');
  });
});
