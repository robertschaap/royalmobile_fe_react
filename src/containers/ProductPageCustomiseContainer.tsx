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

const ProductPageCustomiseContainer: React.FC = () => {
  const dispatch = useDispatch();
  const productSelection = useSelector(selectProductSelection);
  const product = useSelector(selectProductCollection);

  const selectedVariant = product!.variants.find(variant => variant.variantId === productSelection.variantId) || product!.variants[0];
  const deviceManufacturer = product!.manufacturer;
  const deviceName = `${product!.model} ${selectedVariant.capacity} ${selectedVariant.color}`;
  const deviceCost = `${selectedVariant.regular_price},-`;

  const colors = useMemo(() => {
    return ProductUtil.getProductVariantColorsForCapacity(product!.variants, selectedVariant.capacity);
  }, [product, selectedVariant.capacity])

  const capacities = useMemo(() => {
    return ProductUtil.getProductVariantCapacitiesForColor(product!.variants, selectedVariant.color);
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
        selectedVariantId={selectedVariant.variantId} />
    </PageSection>
  );
};

export default ProductPageCustomiseContainer;
