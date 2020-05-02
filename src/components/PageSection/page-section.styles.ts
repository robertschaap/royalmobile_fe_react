import styled from 'styled-components';
import { media_breakpoint_up } from '../../styles/theme';

export const PageSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${media_breakpoint_up.md} {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }
`;
