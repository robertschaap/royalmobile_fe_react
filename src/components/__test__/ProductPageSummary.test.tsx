import React from 'react';
import ProductPageSummary from '../ProductPageSummary';

import { renderWithTheme } from '../../test/helpers';

describe('<ProductPageSummary />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ProductPageSummary />);
  });
});
