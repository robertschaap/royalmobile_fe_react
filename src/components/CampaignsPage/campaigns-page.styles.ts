import styled from 'styled-components';
import { media_breakpoint_up } from '../../styles/theme';

import { GridItem } from '../Grid';

export const PaddedGridItem = styled(GridItem)`
  padding: 0 ${({ theme }) => theme.spacing(4)};

  > p:first-of-type {
    margin-top: 0;
  }
`;

export const UL = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${media_breakpoint_up.md} {
    flex-direction: column;
  }
`;

export const LI = styled.li`
  margin-bottom: 6px;

  > span {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    display: inline-block;
    padding: 0 ${({ theme }) => theme.spacing(2)};
    margin-right: 6px;
  }

  ${media_breakpoint_up.md} {
    > span {
      font-size: 48px;
    }
  }
`;
