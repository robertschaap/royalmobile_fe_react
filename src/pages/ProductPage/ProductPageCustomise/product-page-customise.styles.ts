import styled from 'styled-components';
import { media_breakpoint_up } from '../../../styles/theme';


export const ProductDescription = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(4)};
  flex: 0 0 100%;

  ${media_breakpoint_up.lg} {
    flex: 0 0 350px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex: 0 0 100%;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  ${media_breakpoint_up.md} {
    flex: none;
  }

  ${media_breakpoint_up.lg} {
    margin-bottom: 0;
  }
`;

export const DeviceImage = styled.div`
  width: 115px;
  margin-right: ${({ theme }) => theme.spacing(4)};

  ${media_breakpoint_up.md} {
    width: 200px;
    margin-right: 0;
  }
`;

export const DeviceName = styled.div`
  font-weight: 700;
`;

export const DeviceManufacturer = styled.div``;


export const DeviceCustomisationOptions = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(4)};
  flex: 0 0 100%;

  ${media_breakpoint_up.md} {
    padding: ${({ theme }) => theme.spacing(4)};
    flex: auto;
  }
`;

export const DeviceCapacity = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const DeviceColor = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  ${media_breakpoint_up.md} {
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
`;

export const DeviceDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  ${media_breakpoint_up.md} {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

export const Flexy = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media_breakpoint_up.lg} {
    flex-wrap: nowrap;
  }
`;

export const DeviceCost = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary}
`;
