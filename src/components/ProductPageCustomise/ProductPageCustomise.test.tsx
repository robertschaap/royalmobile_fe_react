import React from 'react';
import ProductPageCustomise from '.';

import { renderWithTheme } from '../../test/helpers';

describe('<ProductPageCustomise />', () => {
  it('should render without crashing', () => {
    renderWithTheme(
      <ProductPageCustomise
        capacities={[]}
        colors={[]}
        deviceCost=''
        deviceManufacturer=''
        deviceName='' />,
    );
  });
});
