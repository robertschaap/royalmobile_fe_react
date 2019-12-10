import React from 'react';
import DeviceCapacityListing from '../../components/DeviceCapacityListing';

import { renderWithProviders } from '../helpers';

describe('<DeviceCapacityListing />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<DeviceCapacityListing />);
  });
});
