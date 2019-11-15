import React from 'react';
import styled from 'styled-components';

import NavigationSmall from './NavigationSmall';
import NavigationMedium from './NavigationMedium';

const Navigation: React.FC = () => {
  return (
    <>
      <NavigationSmall />
      <NavigationMedium />
    </>
  );
};

export default Navigation;
