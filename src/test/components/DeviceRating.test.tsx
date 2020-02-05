import React from 'react';
import DeviceRating from '../../components/DeviceRating';

import { renderWithTheme } from '../helpers';

describe('<DeviceRating />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<DeviceRating />);
  });
});
