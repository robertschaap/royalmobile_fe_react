import React from 'react';
import ProductListingContainer from '../../containers/ProductListingContainer';

import { renderWithProviders } from '../helpers';

describe('<ProductListingContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ProductListingContainer />);
  });
});
