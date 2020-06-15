import React from 'react';
import * as S from './navigation-medium.styles';
import { useContentCopy } from '../../utils/useContentCopy';

import {
  ForYourBusinessLink,
  HelpLink,
  MyAccountLink,
  OrderLink,
  ProductsForYouLink,
} from '../NavigationLinks';

const Navigation: React.FC = () => {
  return (
    <S.NavigationMediumBase>
      <S.NavigationLeft>
        {useContentCopy('navigation.ourProducts')}
      </S.NavigationLeft>
      <S.NavigationMiddle>
        <ProductsForYouLink />
        <span> | </span>
        <ForYourBusinessLink />
      </S.NavigationMiddle>
      <S.NavigationGroup>
        <MyAccountLink />
        <span> | </span>
        <HelpLink />
        <span> | </span>
        <OrderLink />
      </S.NavigationGroup>
    </S.NavigationMediumBase>
  );
};

export default Navigation;
