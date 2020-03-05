import React from 'react';
import DeviceCapacityListing from '../../components/DeviceCapacityListing';

import { renderWithProviders } from '../helpers';

describe('<DeviceCapacityListing />', () => {
  it('should render without crashing', () => {
    const { getByTestId } = renderWithProviders(
      <DeviceCapacityListing
        capacities={[]}
        onClickCapacity={jest.fn()}
        selectedCapacityId=""
      />
    );

    expect(getByTestId('device-capacity-listing').children.length).toBe(0);
  });
});
