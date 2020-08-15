import styled from 'styled-components';

import { media_breakpoint_up } from '../../../styles/theme';

export const ToggleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  margin-top: 16px;

  ${media_breakpoint_up.md} {
    flex-wrap: unset;
  }
`;

export const ToggleDescription = styled.span`
  flex: 0 0 100%;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${media_breakpoint_up.md} {
    flex: auto;
    margin-bottom: unset;
    margin-right: ${({ theme }) => theme.spacing(4)};
  }

  ${media_breakpoint_up.lg} {
    flex: 0 0 50%;

  }
`;

export const ToggleLabel = styled.span`
  margin-left: ${({ theme }) => theme.spacing(4)};
`;

export const PaymentBase = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(4)};
`;
