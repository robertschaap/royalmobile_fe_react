import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import OrderPageContainer from './OrderPageContainer';

describe('<OrderPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<OrderPageContainer />);
  });
});
