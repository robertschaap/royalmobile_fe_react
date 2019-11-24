import React from 'react';
import styled from 'styled-components';
import { breakpoint_up } from '../styles/theme';
import { useContentCopy } from '../hooks';
import routes from '../constants/routes';

import Link from './Link';

const BreadcrumbsBase = styled.div`
  display: none;

  @media ${breakpoint_up.md} {
    display: unset;
    padding: 0 ${({ theme }) => theme.spacing(4)};
  }
`;

const Breadcrumbs: React.FC = () => {
  return (
    <BreadcrumbsBase>
      <Link to={routes.HOME_PAGE}>{useContentCopy("navigation.home")}</Link> |
    </BreadcrumbsBase>
  );
};

export default Breadcrumbs;
