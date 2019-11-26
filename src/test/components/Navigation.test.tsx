import React from 'react';
import Navigation from '../../components/Navigation';

import { renderWithProviders } from '../helpers';

describe('<Navigation />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Navigation />);
  });
});
