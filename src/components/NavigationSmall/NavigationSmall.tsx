import React from 'react';

import {
  ForYourBusinessLink,
  HelpLink,
  MyAccountLink,
  ProductsForYouLink,
  OrderLink,
} from '../NavigationLinks';

import * as S from './navigation-small.styles';

const Navigation: React.FC = () => {
  return (
    <S.NavigationSmallBase>
      <S.NavigationTop>
        <MyAccountLink />
        <span>
          <HelpLink /> |&nbsp;
          <OrderLink />
        </span>
      </S.NavigationTop>
      <S.NavigationBottom>
        <ProductsForYouLink />
        <ForYourBusinessLink />
      </S.NavigationBottom>
    </S.NavigationSmallBase>
  );
};

export default Navigation;
