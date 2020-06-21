import React from 'react';
import ProductPageorder from '.';

import { renderWithTheme } from '../../../test/helpers';

describe('<ProductPageorder />', () => {
  it('should render without crashing', () => {
    renderWithTheme(
      <ProductPageorder
        hasSelection={true}
        onClickOrder={jest.fn}
        onClickRenewContract={jest.fn} />,
    );
  });
});
