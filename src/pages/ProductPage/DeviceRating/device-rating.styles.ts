import styled from 'styled-components';
import { media_breakpoint_up } from '../../../styles/theme';

export const DeviceRatingBase = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  ${media_breakpoint_up.md} {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

export const StarFilled = styled.span`
  color: ${({ theme }) => theme.color.primary};
`;

export const StarHollow = styled.span`
  color: ${({ theme }) => theme.color.grey};
`;
