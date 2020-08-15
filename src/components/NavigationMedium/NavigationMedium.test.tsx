import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import NavigationMedium from '.';

describe('<NavigationMedium />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<NavigationMedium />);
  });
});
