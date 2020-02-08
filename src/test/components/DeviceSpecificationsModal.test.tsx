import React from 'react';
import DeviceSpecificationsModal from '../../components/DeviceSpecificationsModal';

import { renderWithTheme } from '../helpers';

describe('<DeviceSpecificationsModal />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<DeviceSpecificationsModal />);
  });
});
