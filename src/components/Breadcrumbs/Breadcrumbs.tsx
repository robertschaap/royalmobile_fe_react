import React from 'react';

import routes from '../../constants/routes';
import { ContentUtil } from '../../utils/ContentUtil';
import Link from '../Link';

import * as S from './breadcrumbs.styles';

const Breadcrumbs: React.FC = () => {
  return (
    <S.BreadcrumbsBase>
      <Link to={routes.HOME_PAGE}>{ContentUtil('pages.home')}</Link> |
    </S.BreadcrumbsBase>
  );
};

export default Breadcrumbs;
