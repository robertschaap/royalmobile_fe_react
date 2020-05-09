import React from 'react';
import ProductPageContainer from './ProductPageContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<ProductPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ProductPageContainer />);
  });
});
