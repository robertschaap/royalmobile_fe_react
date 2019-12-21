import React from 'react';
import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';
import { useContentCopy } from '../hooks';
import routes from '../constants/routes';

import Link from './Link';

const HeaderLogoBase = styled.span`
  font-size: 40px;

  ${media_breakpoint_up.md} {
    font-size: 48px;
  }
`;

const HeaderLogoBold = styled(HeaderLogoBase)`
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`;

const HeaderLogo: React.FC = () => {
  return (
    <Link
      data-testid="header-logo"
      to={routes.HOME_PAGE}>
      <HeaderLogoBold>{useContentCopy('common.royal')}</HeaderLogoBold>
      <HeaderLogoBase>{useContentCopy('common.mobile')}</HeaderLogoBase>
    </Link>
  );
};

export default HeaderLogo;
