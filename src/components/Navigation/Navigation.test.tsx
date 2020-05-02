import React from 'react';
import Navigation from '.';

import { renderWithProviders } from '../../test/helpers';

describe('<Navigation />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Navigation />);
  });
});
