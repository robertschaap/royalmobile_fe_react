import React from 'react';
import DurationListing from '../../components/DurationListing';

import { renderWithProviders } from '../helpers';

describe('<DurationListing />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<DurationListing />);
  });
});
