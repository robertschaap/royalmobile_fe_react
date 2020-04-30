import styled from 'styled-components';
import { media_breakpoint_up } from '../../styles/theme';

export const BenefitsItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding:
    ${({ theme }) => theme.spacing(3)}
    ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;

  ${media_breakpoint_up.md} {
    padding:
    ${({ theme }) => theme.spacing(6)}
    ${({ theme }) => theme.spacing(8)};
  }
`;

export const BenefitsItemCallout = styled.span`
  flex: none;
  margin-right: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.color.primary};
  font-size: 50px;
  font-weight: 700;

  ${media_breakpoint_up.md} {
    margin-right: ${({ theme }) => theme.spacing(6)};
  }
`;

export const BenefitsItemDescription = styled.span`
  font-size: 12px;

  ${media_breakpoint_up.sm} {
    font-size: unset;
  }
`;
