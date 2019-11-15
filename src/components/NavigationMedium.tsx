import React from 'react';
import styled from 'styled-components';
import { breakpoint_up } from '../styles/theme';

const NavigationMediumBase = styled.nav`
  display: none;
  background-color: ${({ theme }) => theme.color.lightGrey};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;
  overflow: hidden;

  @media ${breakpoint_up.md} {
    display: flex;
  }
`;

const NavigationGroup = styled.div`
  padding:
    ${({ theme }) => theme.spacing(2)}
    ${({ theme }) => theme.spacing(4)};
`;

const NavigationLeft = styled(NavigationGroup)`
  background-color: ${({ theme }) => theme.color.grey};
`;

const NavigationMiddle = styled(NavigationGroup)`
  flex: auto;
`;

const Navigation: React.FC = () => {
  return (
    <NavigationMediumBase>
      <NavigationLeft>
        Our Products
      </NavigationLeft>
      <NavigationMiddle>
        <span>Products for You</span>
        <span> | </span>
        <span>For Your Business</span>
      </NavigationMiddle>
      <NavigationGroup>
        <span>My Account</span>
        <span> | </span>
        <span>Help</span>
      </NavigationGroup>
    </NavigationMediumBase>
  );
};

export default Navigation;
