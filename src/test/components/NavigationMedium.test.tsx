import React from 'react';
import NavigationMedium from '../../components/NavigationMedium';

import { renderWithProviders } from '../helpers';

describe('<NavigationMedium />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<NavigationMedium />);
  });
});
