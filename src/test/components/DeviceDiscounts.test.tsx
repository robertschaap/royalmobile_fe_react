import React from 'react';
import DeviceDiscounts from '../../components/DeviceDiscounts';

import { renderWithTheme } from '../helpers';

describe('<DeviceDiscounts />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<DeviceDiscounts />);
  });
});
