import React from 'react';
import OrderPageContainer from '../../containers/OrderPageContainer';

import { renderWithProviders } from '../helpers';

describe('<OrderPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<OrderPageContainer />);
  });
});
