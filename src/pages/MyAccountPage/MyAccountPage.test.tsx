import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import MyAccountPage from './MyAccountPage';

describe('<MyAccountPage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<MyAccountPage />);
  });
});
