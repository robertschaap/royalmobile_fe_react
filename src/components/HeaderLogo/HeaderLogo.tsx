import React from 'react';
import * as S from './header-logo.styles';

import { ContentUtil } from '../../utils/ContentUtil';
import routes from '../../constants/routes';

import Link from '../Link';

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
