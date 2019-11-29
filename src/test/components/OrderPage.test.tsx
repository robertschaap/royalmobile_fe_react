import React from 'react';
import OrderPage from '../../components/OrderPage';

import { renderWithTheme } from '../helpers';

describe('<OrderPage />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<OrderPage />);
  });
});
