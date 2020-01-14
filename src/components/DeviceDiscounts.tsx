import React from 'react';
import styled from 'styled-components';

import { media_breakpoint_up } from '../styles/theme';

const DeviceDiscountsBase = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style-type: none;

  ${media_breakpoint_up.md} {
    flex-direction: row;
  }
`;

const DeviceDiscountItem = styled.li`
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

const DeviceDiscounts: React.FC = () => {
  return (
    <DeviceDiscountsBase>
      <DeviceDiscountItem>
        <span>Sale</span>
      </DeviceDiscountItem>
      <DeviceDiscountItem>
        <span>Sale</span>
      </DeviceDiscountItem>
      <DeviceDiscountItem>
        <span>Sale</span>
      </DeviceDiscountItem>
    </DeviceDiscountsBase>
  );
};

export default DeviceDiscounts;
