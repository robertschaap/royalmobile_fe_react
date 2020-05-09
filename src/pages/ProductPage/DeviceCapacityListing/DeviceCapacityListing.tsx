import React from 'react';
import * as S from './device-capacity-listing.styles';

interface DeviceCapacityListingProps {
  onClickCapacity(id: string): void;
  selectedCapacityId: string;
  // TODO: create type for this
  capacities: {
    id: string;
    capacity: string;
  }[];
}

const DeviceCapacityListing: React.FC<DeviceCapacityListingProps> = (props) => {
  const { onClickCapacity, selectedCapacityId, capacities } = props;

  return (
    <S.DeviceCapacityListingBase
      data-testid="device-capacity-listing">
      {capacities.map(({ id, capacity }) => (
        <S.DeviceCapacityListingItem
          key={id}
          onClick={() => onClickCapacity(id)}
          data-testprop-is-selected={id === selectedCapacityId}
          isSelected={id === selectedCapacityId}>
          {capacity}
        </S.DeviceCapacityListingItem>
      ))}
    </S.DeviceCapacityListingBase>
  );
};

export default DeviceCapacityListing;
