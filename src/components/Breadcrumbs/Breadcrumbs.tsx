import React from 'react';
import * as S from './breadcrumbs.styles';
import { ContentUtil } from '../../utils/ContentUtil';
import routes from '../../constants/routes';

import Link from '../Link';

const Breadcrumbs: React.FC = () => {
  return (
    <S.BreadcrumbsBase>
      <Link to={routes.HOME_PAGE}>{ContentUtil('pages.home')}</Link> |
    </S.BreadcrumbsBase>
  );
};

export default Breadcrumbs;
