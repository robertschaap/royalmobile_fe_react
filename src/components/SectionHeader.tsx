import styled from 'styled-components';
import { breakpoint_up } from '../styles/theme';

const SectionHeader = styled.h2`
  font-size: 22px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  padding: 0 ${({ theme }) => theme.spacing(4)};

  @media ${breakpoint_up.md} {
    font-size: 32px;
  }
`;

export default SectionHeader;
