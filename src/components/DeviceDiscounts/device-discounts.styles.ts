import styled from 'styled-components';

import { media_breakpoint_up } from '../../styles/theme';

export const DeviceDiscountsBase = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style-type: none;

  ${media_breakpoint_up.md} {
    flex-direction: row;
  }
`;

export const DeviceDiscountItem = styled.li`
  margin-bottom: 6px;

  > span {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    display: inline-block;
    padding: 0 ${({ theme }) => theme.spacing(2)};
  }

  ${media_breakpoint_up.md} {
    margin-right: ${({ theme }) => theme.spacing(1)};
  }
`;
