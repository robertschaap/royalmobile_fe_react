import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import Navigation from '.';

describe('<Navigation />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Navigation />);
  });
});
