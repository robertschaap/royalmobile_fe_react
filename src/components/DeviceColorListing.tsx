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

const DeviceColorListing: React.FC = () => {
  return (
    <DeviceColorListingBase>
      <DeviceColorListingItem isSelected={true} color="#7ec09a" />
      <DeviceColorListingItem isSelected={false} color="#8097c2" />
      <DeviceColorListingItem isSelected={false} color="#bae596" />
      <DeviceColorListingItem isSelected={false} color="#d59a8d" />
    </DeviceColorListingBase>
  );
};

export default DeviceColorListing;
