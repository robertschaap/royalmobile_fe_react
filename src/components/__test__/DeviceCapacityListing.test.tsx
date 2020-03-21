import React from 'react';
import DeviceCapacityListing from '../DeviceCapacityListing';

import { renderWithTheme } from '../../test/helpers';

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
        selectedCapacityId="" />,
    );

    expect(getByTestId('device-capacity-listing').children.length).toBe(0);
  });

  it('should render a list of device capacities', () => {
    const { getByTestId } = renderWithTheme(
      <DeviceCapacityListing
        capacities={capacities}
        onClickCapacity={jest.fn()}
        selectedCapacityId="" />,
    );

    expect(getByTestId('device-capacity-listing').children.length).toBe(3);
    expect(getByTestId('device-capacity-listing').firstChild).toHaveTextContent('Capacity 1');
  });

  it('should hightlight the selected device capacity', () => {
    const { getByText } = renderWithTheme(
      <DeviceCapacityListing
        capacities={capacities}
        onClickCapacity={jest.fn()}
        selectedCapacityId='capacity-id2' />,
    );

    expect(getByText('Capacity 1')).toHaveAttribute('data-testprop-is-selected', 'false');
    expect(getByText('Capacity 2')).toHaveAttribute('data-testprop-is-selected', 'true');
    expect(getByText('Capacity 3')).toHaveAttribute('data-testprop-is-selected', 'false');
  });
});
