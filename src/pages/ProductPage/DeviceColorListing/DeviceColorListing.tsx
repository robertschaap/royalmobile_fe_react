import React from 'react';

import { ProductColor } from '../../../types/products';
import StringUtil from '../../../utils/StringUtil';

import * as S from './device-color-listing.styles';

interface DeviceColorListingProps {
  colors: ProductColor[];
  onClickColor(id: string): void;
  selectedColorId: string;
}

const DeviceColorListing: React.FC<DeviceColorListingProps> = (props) => {
  const { colors, onClickColor, selectedColorId } = props;

  return (
    <S.DeviceColorListingBase
      data-testid="device-color-listing">
      {colors.map(({ color, colorHex, variantId }) => (
        <S.DeviceColorListingItem
          key={variantId}
          isSelected={variantId === selectedColorId}
          data-testprop-is-selected={variantId === selectedColorId}
          onClick={() => onClickColor(variantId)}
          colorHex={colorHex}
          title={StringUtil.capitalise(color)} />
      ))}
    </S.DeviceColorListingBase>
  );
};

export default DeviceColorListing;
