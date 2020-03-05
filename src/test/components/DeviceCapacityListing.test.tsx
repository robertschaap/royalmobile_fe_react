import React from 'react';
import DeviceCapacityListing from '../../components/DeviceCapacityListing';

import { renderWithTheme } from '../helpers';

const capacities = [
  { id: 'capacity-id1', capacity: 'Capacity 1' },
  { id: 'capacity-id2', capacity: 'Capacity 2' },
  { id: 'capacity-id3', capacity: 'Capacity 3' },
];

describe('<DeviceCapacityListing />', () => {
  it('should render without crashing', () => {
    const { getByTestId } = renderWithTheme(
      <DeviceCapacityListing
        capacities={[]}
        onClickCapacity={jest.fn()}
        selectedCapacityId="" />
    );

    expect(getByTestId('device-capacity-listing').children.length).toBe(0);
  });

  it('should render a list of device capacities', () => {
    const { getByTestId } = renderWithTheme(
      <DeviceCapacityListing
        capacities={capacities}
        onClickCapacity={jest.fn()}
        selectedCapacityId="" />
    );

    expect(getByTestId('device-capacity-listing').children.length).toBe(3);
  });
});
