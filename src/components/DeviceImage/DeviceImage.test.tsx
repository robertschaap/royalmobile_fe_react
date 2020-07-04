import React from 'react';
import DeviceImage from '.';

import { render } from '../../test/helpers';

describe('<DeviceImage />', () => {
  it('should render without crashing', () => {
    render(<DeviceImage modelId="modelId" color="color" />);
  });
});
