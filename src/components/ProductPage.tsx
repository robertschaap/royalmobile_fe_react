import React from 'react';

import Button from '../components/Button';
import SectionHeader from './SectionHeader';

const ProductPage: React.FC = () => {
  return (
    <>
      <section>
        <SectionHeader>Customise your device</SectionHeader>
      </section>
      <section>
        <SectionHeader>Configure your plan</SectionHeader>
      </section>
      <section>
        <SectionHeader>Summing it all up</SectionHeader>
      </section>
      <Button
        variant="primary">
        I'm ready to order!
      </Button>
      <Button
        variant="secondary">
        I'm ready to renew my contract!
      </Button>
    </>
  );
};

export default ProductPage;
