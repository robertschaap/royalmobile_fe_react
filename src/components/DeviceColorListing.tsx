import React from 'react';
import styled from 'styled-components';

const DeviceColorListingBase = styled.div`
  display: flex;
`;

interface DeviceColorListingItemProps {
  colorHex: string;
  isSelected: boolean;
}

const DeviceColorListingItem = styled.button<DeviceColorListingItemProps>`
  background-color: ${({ colorHex }) => colorHex};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  margin-right: ${({ theme }) => theme.spacing(2)};
  width: 26px;
  height: 26px;

  ${({ isSelected, theme }) => isSelected && `
    border: 2px solid ${theme.color.primary};
  `}
`;

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
    <DeviceColorListingBase
      data-testid="device-color-listing">
      {colors.map(({ color, colorHex, id }) => (
        <DeviceColorListingItem
          key={id}
          isSelected={id === selectedColorId}
          data-testprop-is-selected={id === selectedColorId}
          onClick={() => onClickColor(id)}
          colorHex={colorHex}
          title={color} />
      ))}
    </DeviceColorListingBase>
  );
};

export default DeviceColorListing;
