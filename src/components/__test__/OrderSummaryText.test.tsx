import React from 'react';
import OrderSummaryText from '../OrderSummaryText';

import { renderWithTheme } from '../../test/helpers';

describe('<OrderSummaryText />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<OrderSummaryText />);
  });
});
