import React from 'react';
import ProductPageOrderContainer from './ProductPageOrderContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<ProductPageOrderContainer />', () => {
  xit('should render without crashing', () => {
    renderWithProviders(<ProductPageOrderContainer />);
  });
});
