import React from 'react';
import Header from '.';

import { renderWithProviders } from '../../test/helpers';

describe('<Header />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Header />);
  });
});
