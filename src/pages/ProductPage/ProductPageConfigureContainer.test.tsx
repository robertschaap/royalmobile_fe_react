import React from 'react';
import ProductPageConfigureContainer from './ProductPageConfigureContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<ProductPageConfigureContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ProductPageConfigureContainer />);
  });
});
