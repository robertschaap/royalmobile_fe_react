import React, { useCallback, useMemo } from 'react';

import PageSection from '../../components/PageSection';
import SectionHeader from '../../components/SectionHeader';
import {
  selectProductSelection,
  useDispatch,
  useSelector,
  setProductSelectedVariantId,
} from '../../store';
import { Product } from '../../types/products';
import { ContentUtil } from '../../utils/ContentUtil';
import ProductUtil from '../../utils/ProductUtil';

import ProductPageCustomise from './ProductPageCustomise';

interface ProductPageCustomiseContainerProps {
  product: Product;
}

const ProductPageCustomiseContainer: React.FC<ProductPageCustomiseContainerProps> = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const productSelection = useSelector(selectProductSelection);

  const selectedVariant = useMemo(() => {
    return product.variants.find((variant) => variant.variantId === productSelection.variantId);
  }, [product.variants, productSelection.variantId]);

  const colors = useMemo(() => {
    return ProductUtil.getProductVariantColorsForCapacity(product.variants, selectedVariant?.capacity || '');
  }, [product, selectedVariant]);

  const capacities = useMemo(() => {
    return ProductUtil.getProductVariantCapacitiesForColor(product.variants, selectedVariant?.color || '');
  }, [product, selectedVariant]);

  const onClickColorOrCapacity = useCallback((id: string) => {
    dispatch(setProductSelectedVariantId(id));
  }, [dispatch]);

  return (
    <PageSection>
      <SectionHeader>{ContentUtil('product.customiseDevice')}</SectionHeader>
      {selectedVariant?.variantId && (
        <ProductPageCustomise
          capacities={capacities}
          colors={colors}
          deviceManufacturer={product.manufacturer}
          deviceModel={product.model}
          deviceModelId={product.modelId}
          onClickColorOrCapacity={onClickColorOrCapacity}
          selectedVariant={selectedVariant} />
      )}
    </PageSection>
  );
};

export default ProductPageCustomiseContainer;
