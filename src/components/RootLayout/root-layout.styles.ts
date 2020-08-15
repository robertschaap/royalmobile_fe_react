import styled from 'styled-components';

import { media_breakpoint_up } from '../../styles/theme';

export const RootLayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 960px;
  padding: 0 ${({ theme }) => theme.spacing(4)};

  ${media_breakpoint_up.lg} {
    padding: 0 ${({ theme }) => theme.spacing(0)};
  }
`;
