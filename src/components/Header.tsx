import React from 'react';
import styled from 'styled-components';
import { breakpoint_up } from '../styles/theme';

import Breadcrumbs from './Breadcrumbs';
import HeaderLogo from './HeaderLogo';
import Navigation from './Navigation';

const HeaderBase = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing(4)}

  @media ${breakpoint_up.md} {
    margin-bottom: ${({ theme }) => theme.spacing(6)};
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderBase>
      <HeaderLogo />
      <Navigation />
      <Breadcrumbs />
    </HeaderBase>
  );
};

export default Header;
