import React from 'react';
import ProductPageSummaryContainer from './ProductPageSummaryContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<ProductPageSummaryContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ProductPageSummaryContainer />);
  });
});
