import styled from 'styled-components';

import { media_breakpoint_up } from '../../styles/theme';

export const SectionHeader = styled.h2`
  font-size: 22px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  padding: 0 ${({ theme }) => theme.spacing(4)};

  ${media_breakpoint_up.md} {
    font-size: 32px;
  }
`;
