import React from 'react';
import * as S from './navigation-medium.styles';
import { useContentCopy } from '../../hooks';

import {
  ForYourBusinessLink,
  HelpLink,
  MyAccountLink,
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
      </S.NavigationGroup>
    </S.NavigationMediumBase>
  );
};

export default Navigation;
