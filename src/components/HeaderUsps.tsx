import React from 'react';
import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';

const HeaderUspsBase = styled.ul`
  display: none;
  text-align: right;
  margin: ${({ theme }) => theme.spacing(2)} 0;
  padding-left: 0;
  list-style-type: none;

  ${media_breakpoint_up.md} {
    display: block;
  }
`;

const Check = styled.span`
  font-family: 'Lucida Grande';
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`;

const HeaderUsps: React.FC = () => {
  return (
    <HeaderUspsBase>
      <li><Check>✓</Check> Guaranteed no False Promises</li>
      <li><Check>✓</Check> No Connection Fee For New Customers</li>
      <li><Check>✓</Check> Free Shipping on All Orders</li>
    </HeaderUspsBase>
  );
};

export default HeaderUsps;
