import React from 'react';
import * as S from './navigation-small.styles';

import {
  ForYourBusinessLink,
  HelpLink,
  MyAccountLink,
  ProductsForYouLink,
} from '../NavigationLinks';

const Navigation: React.FC = () => {
  return (
    <S.NavigationSmallBase>
      <S.NavigationTop>
        <MyAccountLink />
        <HelpLink />
      </S.NavigationTop>
      <S.NavigationBottom>
        <ProductsForYouLink />
        <ForYourBusinessLink />
      </S.NavigationBottom>
    </S.NavigationSmallBase>
  );
};

export default Navigation;
