import React from 'react';

import Banner from '../components/Banner';
import Button from '../components/Button';

const Main: React.FC = () => {

  return (
    <>
      <Banner />
      <Button variant="secondary">Load More</Button>
    </>
  );
};

export default Main;
