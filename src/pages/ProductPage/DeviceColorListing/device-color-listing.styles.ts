import styled from 'styled-components';

export const DeviceColorListingBase = styled.div`
  display: flex;
`;

interface DeviceColorListingItemProps {
  colorHex: string;
  isSelected: boolean;
}

export const DeviceColorListingItem = styled.button<DeviceColorListingItemProps>`
  background-color: ${({ colorHex }) => colorHex};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  margin-right: ${({ theme }) => theme.spacing(2)};
  width: 26px;
  height: 26px;

  ${({ isSelected, theme }) => isSelected && `
    border: 2px solid ${theme.color.primary};
  `}

  &:hover {
    cursor: pointer;
  }
`;
