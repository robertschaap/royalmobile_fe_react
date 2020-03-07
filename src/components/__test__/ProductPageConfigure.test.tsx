import React from 'react';
import ProductPageConfigure from '../ProductPageConfigure';

import { renderWithTheme } from '../../test/helpers';

describe('<ProductPageConfigure />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ProductPageConfigure />);
  });
});
