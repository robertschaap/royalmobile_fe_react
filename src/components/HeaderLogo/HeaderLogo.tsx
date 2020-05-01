import React from 'react';
import * as S from './header-logo.styles';

import { useContentCopy } from '../../hooks';
import routes from '../../constants/routes';

import Link from '../Link';

const HeaderLogo: React.FC = () => {
  return (
    <Link
      data-testid="header-logo"
      to={routes.HOME_PAGE}>
      <S.HeaderLogoBold>{useContentCopy('common.royal')}</S.HeaderLogoBold>
      <S.HeaderLogoBase>{useContentCopy('common.mobile')}</S.HeaderLogoBase>
    </Link>
  );
};

export default HeaderLogo;
