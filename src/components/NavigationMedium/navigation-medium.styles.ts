import styled from 'styled-components';
import { media_breakpoint_up } from '../../styles/theme';

export const NavigationMediumBase = styled.nav`
  display: none;
  background-color: ${({ theme }) => theme.color.lightGrey};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;
  overflow: hidden;

  ${media_breakpoint_up.md} {
    display: flex;
  }
`;

export const NavigationGroup = styled.div`
  padding:
    ${({ theme }) => theme.spacing(2)}
    ${({ theme }) => theme.spacing(4)};
`;

export const NavigationLeft = styled(NavigationGroup)`
  background-color: ${({ theme }) => theme.color.grey};
`;

export const NavigationMiddle = styled(NavigationGroup)`
  flex: auto;
`;
