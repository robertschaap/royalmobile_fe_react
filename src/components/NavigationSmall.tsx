import React from 'react';
import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';

import {
  ForYourBusinessLink,
  HelpLink,
  MyAccountLink,
  ProductsForYouLink,
} from './NavigationLinks';

const NavigationSmallBase = styled.nav`
  font-size: 12px;

  ${media_breakpoint_up.sm} {
    font-size: unset;
  }
`;

const NavigationGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding:
    ${({ theme }) => theme.spacing(2)}
    ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;

  ${media_breakpoint_up.md} {
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
        <MyAccountLink />
        <HelpLink />
      </NavigationTop>
      <NavigationBottom>
        <ProductsForYouLink />
        <ForYourBusinessLink />
      </NavigationBottom>
    </NavigationSmallBase>
  );
};

export default Navigation;
