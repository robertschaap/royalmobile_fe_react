import React from 'react';

import routes from '../../constants/routes';
import { ContentUtil } from '../../utils/ContentUtil';
import Link from '../Link';

import * as S from './header-logo.styles';

const HeaderLogo: React.FC = () => {
  return (
    <Link
      data-testid="header-logo"
      to={routes.HOME_PAGE}>
      <S.HeaderLogoBold>{ContentUtil('common.royal')}</S.HeaderLogoBold>
      <S.HeaderLogoBase>{ContentUtil('common.mobile')}</S.HeaderLogoBase>
    </Link>
  );
};

export default HeaderLogo;
