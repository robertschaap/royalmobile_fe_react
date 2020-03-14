import React from 'react';
import ProductPageCustomiseContainer from '../ProductPageCustomiseContainer';

import { renderWithTheme } from '../../test/helpers';

describe('<ProductPageCustomiseContainer />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ProductPageCustomiseContainer />);
  });
});
