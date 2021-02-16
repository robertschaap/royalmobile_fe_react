import React from 'react';

import DeviceImage from '../../../components/DeviceImage';
import { GridBase, GridItem } from '../../../components/Grid';
import routes from '../../../constants/routes';
import { Product } from '../../../types/products';
import formatRoute from '../../../utils/formatRoute';
import StringUtil from '../../../utils/StringUtil';

import * as S from './product-listing.styles';

interface ProductListingProps {
  products: Product[];
}

const ProductListing: React.FC<ProductListingProps> = (props) => {
  const { products } = props;

  return (
    <GridBase data-testid="product-listing">
      {products.map((product, index) => (
        <GridItem
          key={index}
          sm={2}
          md={3}
          lg={4}>
          <S.ProductListingItem to={formatRoute(routes.PRODUCT_PAGE, { id: product.modelId })}>
            <S.DeviceImage>
              <DeviceImage
                modelId={product.modelId}
                color={product.variants[0].color} />
            </S.DeviceImage>
            <S.DeviceInformation>
              <S.DeviceName>{product.model}</S.DeviceName>
              <div>{product.manufacturer}</div>
              <S.DevicePrice>{StringUtil.formatRoundedPrice(product.variants[0].regular_price)}</S.DevicePrice>
            </S.DeviceInformation>
          </S.ProductListingItem>
        </GridItem>
      ))}
    </GridBase>
  );
};

export default ProductListing;
