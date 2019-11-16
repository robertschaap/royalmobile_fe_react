import React from 'react';

import PageTitle from '../components/PageTitle';
import HomePage from '../components/HomePage';

const Main: React.FC = () => {
  return (
    <>
      <PageTitle page="Home" />
      <HomePage />
    </>
  );
};

export default Main;
