import React from 'react';
import DeviceDiscounts from '.';

import { renderWithTheme } from '../../test/helpers';

describe('<DeviceDiscounts />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<DeviceDiscounts />);
  });
});
