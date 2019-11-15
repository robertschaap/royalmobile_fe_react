import React from 'react';

import Breadcrumbs from './Breadcrumbs';
import HeaderLogo from './HeaderLogo';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header>
      <HeaderLogo />
      <Navigation />
      <Breadcrumbs />
    </header>
  );
};

export default Header;
