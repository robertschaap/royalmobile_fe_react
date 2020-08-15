import React from 'react';

import NavigationMedium from '../NavigationMedium';
import NavigationSmall from '../NavigationSmall';

const Navigation: React.FC = () => {
  return (
    <>
      <NavigationSmall />
      <NavigationMedium />
    </>
  );
};

export default Navigation;
