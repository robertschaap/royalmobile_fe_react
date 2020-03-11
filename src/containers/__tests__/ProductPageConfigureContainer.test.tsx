import React from 'react';
import ProductPageConfigureContainer from '../ProductPageConfigureContainer';

import { renderWithTheme } from '../../test/helpers';

describe('<ProductPageConfigureContainer />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ProductPageConfigureContainer />);
  });
});
