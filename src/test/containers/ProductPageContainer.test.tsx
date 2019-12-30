import React from 'react';
import ProductPageContainer from '../../containers/ProductPageContainer';

import { renderWithProviders } from '../helpers';

describe('<ProductPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ProductPageContainer />);
  });
});
