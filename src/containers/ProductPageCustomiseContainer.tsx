import React, { useState } from 'react';
import {
  useSelector,
  selectProductCollection,
} from '../store';
import { useContentCopy } from '../hooks';

import PageSection from '../components/PageSection';
import ProductPageCustomise from '../components/ProductPageCustomise';
import SectionHeader from '../components/SectionHeader';
import ProductUtil from '../utils/ProductUtil';

const deviceName = 'iPhone X 16gb Lime';
const deviceManufacturer = 'Apple';
const deviceCost = '265,-';

const ProductPageCustomiseContainer: React.FC = () => {
  const product = useSelector(selectProductCollection);
  const colors = ProductUtil.getProductVariantColorsForCapacity(product!, '16gb');
  const capacities = ProductUtil.getProductVariantCapacitiesForColor(product!, 'lime');

  const [selectedColorId, setSelectedColorId] = useState(colors[0].id);
  const [selectedCapacityId, setSelectedCapacityId] = useState(capacities[0].id);

  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.customiseDevice')}</SectionHeader>
      <ProductPageCustomise
        capacities={capacities}
        colors={colors}
        deviceCost={deviceCost}
        deviceManufacturer={deviceManufacturer}
        deviceName={deviceName}

        selectedColorId={selectedColorId}
        selectedCapacityId={selectedCapacityId}
        onClickColor={setSelectedColorId}
        onClickCapacity={setSelectedCapacityId}
      />
    </PageSection>
  );
};

export default ProductPageCustomiseContainer;
