import styled from 'styled-components';

import { media_breakpoint_up } from '../../../styles/theme';

export const DeviceCapacityListingBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${({ theme }) => theme.spacing(1)};
`;

interface DeviceCapacityListingItemProps {
  isSelected: boolean;
}

export const DeviceCapacityListingItem = styled.button<DeviceCapacityListingItemProps>`
  flex: 1 1 calc(50% - ${({ theme }) => theme.spacing(2)});
  margin: 0 ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.grey};

  ${({ isSelected, theme }) => isSelected && `
    border: 2px solid ${theme.color.primary};
  `}

  &:hover {
    cursor: pointer;
  }

  ${media_breakpoint_up.md} {
    flex: none;
    padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(4)};
  }
`;
