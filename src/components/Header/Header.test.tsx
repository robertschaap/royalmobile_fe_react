import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import Header from '.';

describe('<Header />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Header />);
  });
});
