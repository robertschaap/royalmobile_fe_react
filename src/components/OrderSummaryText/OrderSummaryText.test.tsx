import React from 'react';
import OrderSummaryText from '.';

import { renderWithTheme } from '../../test/helpers';

describe('<OrderSummaryText />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<OrderSummaryText />);
  });
});
