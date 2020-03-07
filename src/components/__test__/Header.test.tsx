import React from 'react';
import Header from '../Header';

import { renderWithProviders } from '../../test/helpers';

describe('<Header />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Header />);
  });
});
