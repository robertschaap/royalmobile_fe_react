import React from 'react';

import { render } from '../../test/helpers';

import DeviceImage from '.';

describe('<DeviceImage />', () => {
  it('should render without crashing', () => {
    render(<DeviceImage modelId="modelId" color="color" />);
  });
});
