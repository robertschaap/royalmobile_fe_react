import React from 'react';
import ProductPageSummary from '.';

import { renderWithTheme } from '../../test/helpers';

describe('<ProductPageSummary />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ProductPageSummary />);
  });
});
