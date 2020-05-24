import React from 'react';
import * as S from './device-color-listing.styles';

import StringUtil from '../../../utils/StringUtil';

interface DeviceColorListingProps {
  // TODO: create type for this
  colors: {
    id: string;
    color: string;
    colorHex: string;
  }[];
  onClickColor(id: string): void;
  selectedColorId: string;
}

const DeviceColorListing: React.FC<DeviceColorListingProps> = (props) => {
  const { colors, onClickColor, selectedColorId } = props;

  return (
    <S.DeviceColorListingBase
      data-testid="device-color-listing">
      {colors.map(({ color, colorHex, id }) => (
        <S.DeviceColorListingItem
          key={id}
          isSelected={id === selectedColorId}
          data-testprop-is-selected={id === selectedColorId}
          onClick={() => onClickColor(id)}
          colorHex={colorHex}
          title={StringUtil.capitalise(color)} />
      ))}
    </S.DeviceColorListingBase>
  );
};

export default DeviceColorListing;
