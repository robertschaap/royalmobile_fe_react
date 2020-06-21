import React from 'react';
import OrderSummaryText from '.';

import { renderWithTheme } from '../../../test/helpers';
import { OrderSummary } from '../../../hooks';

describe('<OrderSummaryText />', () => {
  it('should render without crashing', () => {
    renderWithTheme(
      <OrderSummaryText
        deviceName="device-name"
        orderSummary={{} as OrderSummary} />,
    );
  });
});
