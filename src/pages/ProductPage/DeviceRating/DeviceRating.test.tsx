import React from 'react';

import { renderWithTheme } from '../../../test/helpers';

import DeviceRating from '.';

describe('<DeviceRating />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<DeviceRating />);
  });
});
