import React from 'react';

import { renderWithTheme } from '../../../test/helpers';

import ProductPageorder from '.';

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
