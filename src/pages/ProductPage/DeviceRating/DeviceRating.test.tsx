import React from 'react';
import DeviceRating from '.';

import { renderWithTheme } from '../../../test/helpers';

describe('<DeviceRating />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<DeviceRating />);
  });
});
