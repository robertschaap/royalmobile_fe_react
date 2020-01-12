import React from 'react';
import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';

const DeviceCapacityListingBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${({ theme }) => theme.spacing(1)};
`;

interface DeviceCapacityListingItemProps {
  isSelected: boolean;
}

const DeviceCapacityListingItem = styled.button<DeviceCapacityListingItemProps>`
  flex: 1 1 calc(50% - ${({ theme }) => theme.spacing(2)});
  margin: 0 ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.grey};

  ${({ isSelected, theme }) => isSelected && `
    border: 2px solid ${theme.color.primary};
  `}

  ${media_breakpoint_up.md} {
    flex: none;
    padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(4)};
  }
`;

const DeviceCapacityListing: React.FC = () => {
  return (
    <DeviceCapacityListingBase>
      <DeviceCapacityListingItem isSelected={true}>16gb</DeviceCapacityListingItem>
      <DeviceCapacityListingItem isSelected={false}>32gb</DeviceCapacityListingItem>
      <DeviceCapacityListingItem isSelected={false}>64gb</DeviceCapacityListingItem>
      <DeviceCapacityListingItem isSelected={false}>128gb</DeviceCapacityListingItem>
    </DeviceCapacityListingBase>
  );
};

export default DeviceCapacityListing;
