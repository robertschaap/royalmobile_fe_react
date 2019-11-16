import React from 'react';

import Banner from '../components/Banner';
import Button from '../components/Button';
import PageTitle from '../components/PageTitle';

const Main: React.FC = () => {

  return (
    <>
      <PageTitle page="Home" />
      <Banner />
      <Button variant="secondary">Load More</Button>
    </>
  );
};

export default Main;
