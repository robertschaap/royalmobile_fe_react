import styled from 'styled-components';

import { media_breakpoint_up } from '../../styles/theme';

export const HeaderBase = styled.header`
  background-color: rgba(255,255,255,0.97);
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};

  margin-top: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  /**
   * 4px container width so focused elements
   * flow naturally under the sticky header
   */
  margin-left: -${({ theme }) => theme.spacing(1)};
  margin-right: -${({ theme }) => theme.spacing(1)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(1)};

  ${media_breakpoint_up.md} {
    margin-top: ${({ theme }) => theme.spacing(7)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media_breakpoint_up.md} {
    padding: 0 ${({ theme }) => theme.spacing(4)};
  }
`;
