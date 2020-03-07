import React from 'react';
import ProductPageCustomise from '../ProductPageCustomise';

import { renderWithTheme } from '../../test/helpers';

describe('<ProductPageCustomise />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ProductPageCustomise />);
  });
});
