import React from 'react';
import ProductListingContainer from '../ProductListingContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<ProductListingContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ProductListingContainer />);
  });
});
