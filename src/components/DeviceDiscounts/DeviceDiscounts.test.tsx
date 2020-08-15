import React from 'react';

import { renderWithTheme } from '../../test/helpers';

import DeviceDiscounts from '.';

describe('<DeviceDiscounts />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<DeviceDiscounts />);
  });
});
