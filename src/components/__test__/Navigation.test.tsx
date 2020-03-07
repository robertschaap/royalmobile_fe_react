import React from 'react';
import Navigation from '../Navigation';

import { renderWithProviders } from '../../test/helpers';

describe('<Navigation />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Navigation />);
  });
});
