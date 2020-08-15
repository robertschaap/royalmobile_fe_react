import React from 'react';

import { ProductCapacity } from '../../../types/products';

import * as S from './device-capacity-listing.styles';

interface DeviceCapacityListingProps {
  onClickCapacity(id: string): void;
  selectedCapacityId: string;
  capacities: ProductCapacity[];
}

const DeviceCapacityListing: React.FC<DeviceCapacityListingProps> = (props) => {
  const { onClickCapacity, selectedCapacityId, capacities } = props;

  return (
    <S.DeviceCapacityListingBase
      data-testid="device-capacity-listing">
      {capacities.map(({ variantId, capacity }) => (
        <S.DeviceCapacityListingItem
          key={variantId}
          onClick={() => onClickCapacity(variantId)}
          data-testprop-is-selected={variantId === selectedCapacityId}
          isSelected={variantId === selectedCapacityId}>
          {capacity}
        </S.DeviceCapacityListingItem>
      ))}
    </S.DeviceCapacityListingBase>
  );
};

export default DeviceCapacityListing;
