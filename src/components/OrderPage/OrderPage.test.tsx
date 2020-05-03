import React from 'react';
import OrderPage from '.';

import { renderWithTheme } from '../../test/helpers';

describe('<OrderPage />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<OrderPage />);
  });
});
