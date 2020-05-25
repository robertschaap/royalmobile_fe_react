import React, { useCallback, useMemo, useEffect } from 'react';
import {
  selectProductSelection,
  useDispatch,
  useSelector,
  setProductSelectedVariantId,
} from '../../store';
import { useContentCopy } from '../../hooks';

import PageSection from '../../components/PageSection';
import ProductPageCustomise from './ProductPageCustomise';
import SectionHeader from '../../components/SectionHeader';
import ProductUtil from '../../utils/ProductUtil';
import { Product } from '../../types/products';

interface ProductPageCustomiseContainerProps {
  product: Product;
}

const ProductPageCustomiseContainer: React.FC<ProductPageCustomiseContainerProps> = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const productSelection = useSelector(selectProductSelection);

  useEffect(() => {
    dispatch(setProductSelectedVariantId(product.variants[0].variantId));
  }, []);

  const selectedVariant = useMemo(() => {
    return product.variants.find((variant) => variant.variantId === productSelection.variantId) || product.variants[0];
  }, [product.variants, productSelection.variantId]);

  const colors = useMemo(() => {
    return ProductUtil.getProductVariantColorsForCapacity(product.variants, selectedVariant.capacity);
  }, [product, selectedVariant.capacity]);

  const capacities = useMemo(() => {
    return ProductUtil.getProductVariantCapacitiesForColor(product.variants, selectedVariant.color);
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
      {productSelection.variantId && (
        <ProductPageCustomise
          capacities={capacities}
          colors={colors}
          deviceManufacturer={product.manufacturer}
          deviceModel={product.model}
          onClickCapacity={onClickCapacity}
          onClickColor={onClickColor}
          selectedVariant={selectedVariant} />
      )}
    </PageSection>
  );
};

export default ProductPageCustomiseContainer;
