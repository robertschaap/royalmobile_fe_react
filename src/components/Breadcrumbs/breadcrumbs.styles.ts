import styled from 'styled-components';
import { media_breakpoint_up } from '../../styles/theme';

export const BreadcrumbsBase = styled.div`
  display: none;

  ${media_breakpoint_up.md} {
    display: unset;
    padding: 0 ${({ theme }) => theme.spacing(4)};
  }
`;
