import React, { useCallback, useMemo } from 'react';
import {
  selectProductCollection,
  selectProductSelection,
  useDispatch,
  useSelector,
  setProductSelectedVariantId,
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
  const dispatch = useDispatch();
  const productSelection = useSelector(selectProductSelection);
  const product = useSelector(selectProductCollection);

  const selectedVariant = product!.variants.find(i => i.variantId === productSelection.variantId) || product!.variants[0];

  const colors = useMemo(() => {
    return ProductUtil.getProductVariantColorsForCapacity(product!, selectedVariant.capacity);
  }, [product, selectedVariant.capacity])

  const capacities = useMemo(() => {
    return ProductUtil.getProductVariantCapacitiesForColor(product!, selectedVariant.color);
  }, [product, selectedVariant.color]);

  const onClickCapacity = useCallback((id: string) => {
    dispatch(setProductSelectedVariantId(id));
  }, [dispatch]);

  const onClickColor = useCallback((id: string) => {
    dispatch(setProductSelectedVariantId(id));
  }, [dispatch]);

  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.customiseDevice')}</SectionHeader>
      <ProductPageCustomise
        capacities={capacities}
        colors={colors}
        deviceCost={deviceCost}
        deviceManufacturer={deviceManufacturer}
        deviceName={deviceName}
        onClickCapacity={onClickCapacity}
        onClickColor={onClickColor}
        selectedCapacityId={selectedVariant.variantId}
        selectedColorId={selectedVariant.variantId} />
    </PageSection>
  );
};

export default ProductPageCustomiseContainer;
