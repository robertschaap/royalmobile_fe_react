import React from 'react';
import styled from 'styled-components';
import { breakpoint_up } from '../styles/theme';

const NavigationSmallBase = styled.nav``;

const NavigationGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding:
    ${({ theme }) => theme.spacing(2)}
    ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;

  @media ${breakpoint_up.md} {
    display: none;
  }
`;

const NavigationTop = styled(NavigationGroup)`
  background-color: ${({ theme }) => theme.color.lightGrey};
`;

const NavigationBottom = styled(NavigationGroup)`
  border: 1px solid ${({ theme }) => theme.color.grey};
`;

const Navigation: React.FC = () => {
  return (
    <NavigationSmallBase>
      <NavigationTop>
        <span>My Account</span>
        <span>Help</span>
      </NavigationTop>
      <NavigationBottom>
        <span>Products for You</span>
        <span>For Your Business</span>
      </NavigationBottom>
    </NavigationSmallBase>
  );
};

export default Navigation;
