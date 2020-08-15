import React from 'react';

import Breadcrumbs from '../Breadcrumbs';
import HeaderLogo from '../HeaderLogo';
import HeaderUsps from '../HeaderUsps';
import Navigation from '../Navigation';
import SkipNavigationButton from '../SkipNavigationButton';

import * as S from './header.styles';

const Header: React.FC = () => {
  return (
    <S.HeaderBase>
      <S.HeaderTop>
        <HeaderLogo />
        <HeaderUsps />
      </S.HeaderTop>
      <SkipNavigationButton />
      <Navigation />
      <Breadcrumbs />
    </S.HeaderBase>
  );
};

export default Header;
