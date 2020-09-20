import { fireEvent } from '@testing-library/react';
import React from 'react';

import { render } from '../../test/helpers';

import DeviceImage from '.';

describe('<DeviceImage />', () => {
  it('should render an image if there are no errors', () => {
    const { getByTestId } = render(<DeviceImage modelId="" color="" />);

    expect(getByTestId('device-image')).toBeInTheDocument();
  });

  it('should render an image if there are no errors', () => {
    const { getByTestId, queryByTestId } = render(<DeviceImage modelId="" color="" />);

    expect(getByTestId('device-image')).toBeInTheDocument();

    fireEvent(getByTestId('device-image'), new Event('error'));

    expect(queryByTestId('device-image')).not.toBeInTheDocument();
    expect(getByTestId('device-image-fallback')).toBeInTheDocument();
  });
});
