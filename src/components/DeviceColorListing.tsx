import React from 'react';
import styled from 'styled-components';

const DeviceColorListingBase = styled.div`
  display: flex;
`;

interface DeviceColorListingItemProps {
  isSelected: boolean;
}

const DeviceColorListingItem = styled.button<DeviceColorListingItemProps>`
  background-color: ${({ color }) => color};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  margin-right: ${({ theme }) => theme.spacing(2)};
  width: 26px;
  height: 26px;

  ${({ isSelected, theme }) => isSelected && `
    border: 2px solid ${theme.color.primary};
  `}
`;

const deviceColors = [
  { color: '#7ec09a' },
  { color: '#8097c2' },
  { color: '#bae596' },
  { color: '#d59a8d' },
];

interface DeviceColorListingProps {
  // TODO: make this required and handle 0-length
  colors?: { color: string }[];
}

const DeviceColorListing: React.FC<DeviceColorListingProps> = (props) => {
  const { colors = deviceColors } = props;

  return (
    <DeviceColorListingBase>
      {colors.map((e, i) => (
        <DeviceColorListingItem
          key={i}
          isSelected={i === 0}
          color={e.color} />
      ))}
    </DeviceColorListingBase>
  );
};

export default DeviceColorListing;
