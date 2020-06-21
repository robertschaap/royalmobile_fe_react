import React from 'react';
import PaymentSelector from '.';

import { renderWithTheme } from '../../../test/helpers';

describe('<PaymentSelector />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<PaymentSelector />);
  });
});
