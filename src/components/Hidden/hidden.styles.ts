import styled from 'styled-components';

import { media_breakpoint_up } from '../../styles/theme';

interface HiddenProps {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

export const Hidden = styled.div<HiddenProps>`
  ${({ sm }) => (sm ? 'display: none;' : '')}

  ${media_breakpoint_up.md} {
    ${({ md }) => (md ? 'display: none;' : 'display: unset')}
  }

  ${media_breakpoint_up.lg} {
    ${({ lg }) => (lg ? 'display: none;' : 'display: unset')}
  }
`;
