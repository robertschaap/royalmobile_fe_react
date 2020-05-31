import React from 'react';
import * as S from './product-listing.styles';

import routes from '../../../constants/routes';
import formatRoute from '../../../utils/formatRoute';
import StringUtil from '../../../utils/StringUtil';

// TODO: make dynamic
import phone from '../../../assets/images/apple_iphone-x_silver.png';

import { Product } from '../../../types/products';
import { GridBase, GridItem } from '../../../components/Grid';

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
              <img width="100%" alt="phone" src={phone} />
            </S.DeviceImage>
            <S.DeviceInformation>
              <S.DeviceName>{product.model}</S.DeviceName>
              <S.DeviceManufacturer>{product.manufacturer}</S.DeviceManufacturer>
              <S.DevicePrice>{StringUtil.formatRoundedPrice(product.variants[0].regular_price)}</S.DevicePrice>
            </S.DeviceInformation>
          </S.ProductListingItem>
        </GridItem>
      ))}
    </GridBase>
  );
};

export default ProductListing;
