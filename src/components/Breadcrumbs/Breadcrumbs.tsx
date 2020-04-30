import React from 'react';
import * as S from './breadcrumbs.styles';
import { useContentCopy } from '../../hooks';
import routes from '../../constants/routes';

import Link from '../Link';

const Breadcrumbs: React.FC = () => {
  return (
    <S.BreadcrumbsBase>
      <Link to={routes.HOME_PAGE}>{useContentCopy('navigation.home')}</Link> |
    </S.BreadcrumbsBase>
  );
};

export default Breadcrumbs;
