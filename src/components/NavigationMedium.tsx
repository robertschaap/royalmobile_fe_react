import React from 'react';
import styled from 'styled-components';
import { useContentCopy } from '../hooks';
import { media_breakpoint_up } from '../styles/theme';

import {
  ForYourBusinessLink,
  HelpLink,
  MyAccountLink,
  ProductsForYouLink,
} from './NavigationLinks';

const NavigationMediumBase = styled.nav`
  display: none;
  background-color: ${({ theme }) => theme.color.lightGrey};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;
  overflow: hidden;

  ${media_breakpoint_up.md} {
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
        {useContentCopy('navigation.ourProducts')}
      </NavigationLeft>
      <NavigationMiddle>
        <ProductsForYouLink />
        <span> | </span>
        <ForYourBusinessLink />
      </NavigationMiddle>
      <NavigationGroup>
        <MyAccountLink />
        <span> | </span>
        <HelpLink />
      </NavigationGroup>
    </NavigationMediumBase>
  );
};

export default Navigation;
