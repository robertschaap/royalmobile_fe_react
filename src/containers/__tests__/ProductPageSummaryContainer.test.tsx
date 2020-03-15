import React from 'react';
import ProductPageSummaryContainer from '../ProductPageSummaryContainer';

import { renderWithTheme } from '../../test/helpers';

describe('<ProductPageSummaryContainer />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ProductPageSummaryContainer />);
  });
});
