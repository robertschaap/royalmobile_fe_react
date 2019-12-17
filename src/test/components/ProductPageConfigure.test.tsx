import React from 'react';
import ProductPageConfigure from '../../components/ProductPageConfigure';

import { renderWithTheme } from '../helpers';

describe('<ProductPageConfigure />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ProductPageConfigure />);
  });
});
