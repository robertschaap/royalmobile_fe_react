import React from 'react';
import { useContentCopy } from '../hooks';

import PageSection from '../components/PageSection';
import ProductPageCustomise from '../components/ProductPageCustomise';
import SectionHeader from '../components/SectionHeader';

const deviceName = 'iPhone X 16gb Lime';
const deviceManufacturer = 'Apple';
const deviceCost = '265,-';

const colors = [
  { id: 'a', color: 'wraa', colorHex: '#7ec09a' },
  { id: 'b', color: 'wraa', colorHex: '#8097c2' },
  { id: 'c', color: 'wraa', colorHex: '#bae596' },
  { id: 'd', color: 'wraa', colorHex: '#d59a8d' },
];

const capacities = [
  { id: 'a', capacity: '16gb' },
  { id: 'b', capacity: '32gb' },
  { id: 'c', capacity: '64gb' },
  { id: 'd', capacity: '128gb' },
];

const ProductPageCustomiseContainer: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.customiseDevice')}</SectionHeader>
      <ProductPageCustomise
        capacities={capacities}
        colors={colors}
        deviceCost={deviceCost}
        deviceManufacturer={deviceManufacturer}
        deviceName={deviceName} />
    </PageSection>
  );
};

export default ProductPageCustomiseContainer;
