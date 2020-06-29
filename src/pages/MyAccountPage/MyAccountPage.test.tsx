import React from 'react';
import MyAccountPage from './MyAccountPage';

import { renderWithProviders } from '../../test/helpers';

describe('<MyAccountPage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<MyAccountPage />);
  });
});
