import React from 'react';
import PaymentSelector from '../../components/PaymentSelector';

import { renderWithTheme } from '../helpers';

describe('<PaymentSelector />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<PaymentSelector />);
  });
});
