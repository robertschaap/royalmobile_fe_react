import React from 'react';
import Header from '../../components/Header';

import { renderWithProviders } from '../helpers';

describe('<Header />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Header />);
  });
});
