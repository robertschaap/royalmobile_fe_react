import React from 'react';
import DeviceSpecificationsModal from '../DeviceSpecificationsModal';

import { renderWithTheme } from '../../test/helpers';

describe('<DeviceSpecificationsModal />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<DeviceSpecificationsModal />);
  });
});
