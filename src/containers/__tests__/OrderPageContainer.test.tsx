import React from 'react';
import OrderPageContainer from '../OrderPageContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<OrderPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<OrderPageContainer />);
  });
});
