import React from 'react';
import NavigationMedium from '../NavigationMedium';

import { renderWithProviders } from '../../test/helpers';

describe('<NavigationMedium />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<NavigationMedium />);
  });
});
