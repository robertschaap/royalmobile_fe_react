import React from 'react';
import ProductPage from '../../components/ProductPage';

import { renderWithTheme } from '../helpers';

describe('<ProductPage />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ProductPage />);
  });
});
