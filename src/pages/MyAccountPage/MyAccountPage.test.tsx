import React from 'react';
import MyAccountPage from './MyAccountpage';

import { renderWithProviders } from '../../test/helpers';

describe('<MyAccountPage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<MyAccountPage />);
  });
});
