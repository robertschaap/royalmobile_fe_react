import styled from 'styled-components';

import { media_breakpoint_up } from '../../styles/theme';

export const HeaderLogoBase = styled.span`
  font-size: 40px;

  ${media_breakpoint_up.md} {
    font-size: 48px;
  }
`;

export const HeaderLogoBold = styled(HeaderLogoBase)`
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`;
