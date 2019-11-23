import React from 'react';
import styled from 'styled-components';
import { breakpoint_up } from '../styles/theme';
import routes from '../constants/routes';

import Link from './Link';

const HeaderLogoBase = styled.span`
  font-size: 40px;

  @media ${breakpoint_up.md} {
    font-size: 48px;
  }
`;

const HeaderLogoBold = styled(HeaderLogoBase)`
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`;

const HeaderLogo: React.FC = () => {
  return (
    <Link to={routes.HOME}>
      <HeaderLogoBold>Royal</HeaderLogoBold>
      <HeaderLogoBase>Mobile</HeaderLogoBase>
    </Link>
  );
}

export default HeaderLogo;
