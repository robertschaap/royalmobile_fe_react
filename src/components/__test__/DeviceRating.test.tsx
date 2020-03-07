import React from 'react';
import DeviceRating from '../DeviceRating';

import { renderWithTheme } from '../../test/helpers';

describe('<DeviceRating />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<DeviceRating />);
  });
});
