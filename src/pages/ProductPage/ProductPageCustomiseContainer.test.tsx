import React from 'react';
import ProductPageCustomiseContainer from './ProductPageCustomiseContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<ProductPageCustomiseContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ProductPageCustomiseContainer />);
  });
});
