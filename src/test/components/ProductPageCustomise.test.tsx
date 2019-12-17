import React from 'react';
import ProductPageCustomise from '../../components/ProductPageCustomise';

import { renderWithTheme } from '../helpers';

describe('<ProductPageCustomise />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ProductPageCustomise />);
  });
});
