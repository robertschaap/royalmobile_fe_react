import styled from 'styled-components';
import { media_breakpoint_up } from '../../styles/theme';

export const HeaderUspsBase = styled.ul`
  display: none;
  text-align: right;
  margin: ${({ theme }) => theme.spacing(2)} 0;
  padding-left: 0;
  list-style-type: none;

  ${media_breakpoint_up.md} {
    display: block;
  }
`;

export const Check = styled.span`
  font-family: 'Lucida Grande';
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`;
