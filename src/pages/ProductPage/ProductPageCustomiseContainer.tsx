import React, { useCallback, useMemo } from 'react';
import {
  selectProductSelection,
  useDispatch,
  useSelector,
  setProductSelectedVariantId,
} from '../../store';
import { ContentUtil } from '../../utils/ContentUtil';

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

  const selectedVariant = useMemo(() => {
    return product.variants.find((variant) => variant.variantId === productSelection.variantId) || product.variants[0];
  }, [product.variants, productSelection.variantId]);

  const colors = useMemo(() => {
    return ProductUtil.getProductVariantColorsForCapacity(product.variants, selectedVariant.capacity);
  }, [product, selectedVariant.capacity]);

  const capacities = useMemo(() => {
    return ProductUtil.getProductVariantCapacitiesForColor(product.variants, selectedVariant.color);
  }, [product, selectedVariant.color]);

  const onClickColorOrCapacity = useCallback((id: string) => {
    dispatch(setProductSelectedVariantId(id));
  }, [dispatch]);

  return (
    <PageSection>
      <SectionHeader>{ContentUtil('product.customiseDevice')}</SectionHeader>
      {productSelection.variantId && (
        <ProductPageCustomise
          capacities={capacities}
          colors={colors}
          deviceManufacturer={product.manufacturer}
          deviceModel={product.model}
          onClickColorOrCapacity={onClickColorOrCapacity}
          selectedVariant={selectedVariant} />
      )}
    </PageSection>
  );
};

export default ProductPageCustomiseContainer;
