import React from 'react';

import { ContentUtil } from '../../utils/ContentUtil';
import {
  ForYourBusinessLink,
  HelpLink,
  MyAccountLink,
  OrderLink,
  ProductsForYouLink,
} from '../NavigationLinks';

import * as S from './navigation-medium.styles';

const Navigation: React.FC = () => {
  return (
    <S.NavigationMediumBase>
      <S.NavigationLeft>
        {ContentUtil('navigation.ourProducts')}
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
