import styled from 'styled-components';
import { media_breakpoint_up } from '../../styles/theme';

import Link from '../Link';

export const ProductListingItem = styled(Link)`
  display: flex;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;

  ${media_breakpoint_up.sm} {
    padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(4)};
    flex-direction: column;
    align-items: center;
  }
`;

export const DeviceImage = styled.div`
  width: 115px;
  margin-right: ${({ theme }) => theme.spacing(4)};

  ${media_breakpoint_up.sm} {
    margin-right: unset;
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
`;

export const DeviceInformation = styled.div`
  ${media_breakpoint_up.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DeviceName = styled.div`
  font-weight: 700;
`;

export const DeviceManufacturer = styled.div``;

export const DevicePrice = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`;
