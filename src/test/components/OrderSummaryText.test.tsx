import React from 'react';
import OrderSummaryText from '../../components/OrderSummaryText';

import { renderWithTheme } from '../helpers';

describe('<OrderSummaryText />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<OrderSummaryText />);
  });
});
