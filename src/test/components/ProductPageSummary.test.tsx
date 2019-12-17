import React from 'react';
import ProductPageSummary from '../../components/ProductPageSummary';

import { renderWithTheme } from '../helpers';

describe('<ProductPageSummary />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ProductPageSummary />);
  });
});
