import React from 'react';

import { renderWithTheme } from '../../../test/helpers';

import PaymentSelector from '.';

describe('<PaymentSelector />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<PaymentSelector />);
  });
});
