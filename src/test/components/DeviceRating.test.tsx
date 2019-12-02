import React from 'react';
import DeviceRating from '../../components/DeviceRating';

import { renderWithProviders } from '../helpers';

describe('<DeviceRating />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<DeviceRating />);
  });
});
