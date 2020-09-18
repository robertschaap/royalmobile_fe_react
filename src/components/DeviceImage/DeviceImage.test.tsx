import React from 'react';

import { render } from '../../test/helpers';

import DeviceImage from '.';

describe('<DeviceImage />', () => {
  it('should render an image if there are no errors', () => {
    const { getByTestId } = render(<DeviceImage modelId="" color="" />);

    expect(getByTestId('device-image')).toBeInTheDocument();
  });
});
