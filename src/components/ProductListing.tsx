import React from 'react';
import styled from 'styled-components';
import { breakpoint_up } from '../styles/theme';
import routes from '../constants/routes';
import formatRoute from '../utils/formatRoute';

import phone from '../assets/images/apple_iphone-x_silver.png';

import { Product } from '../types/products';
import { GridBase, GridItem } from './Grid';
import Link from './Link';

const ProductListingItem = styled(Link)`
  display: flex;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;

  @media ${breakpoint_up.sm} {
    padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(4)};
    flex-direction: column;
    align-items: center;
  }
`;

const DeviceImage = styled.div`
  width: 115px;
  margin-right: ${({ theme }) => theme.spacing(4)};

  @media ${breakpoint_up.sm} {
    margin-right: unset;
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
`;

const DeviceInformation = styled.div`
  @media ${breakpoint_up.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const DeviceName = styled.div`
  font-weight: 700;
`;
const DeviceManufacturer = styled.div``;

const DevicePrice = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`;

const DeviceOptions = styled.div`
  @media ${breakpoint_up.sm} {
    display: none;
  }
`;

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
          <ProductListingItem to={formatRoute(routes.PRODUCT_PAGE, { id: product.modelId })}>
            <DeviceImage>
              <img width="100%" alt="phone" src={phone} />
            </DeviceImage>
            <DeviceInformation>
              <DeviceName>{product.model}</DeviceName>
              <DeviceManufacturer>{product.manufacturer}</DeviceManufacturer>
              <DevicePrice>{product.variants[0].regular_price}</DevicePrice>
              <DeviceOptions>
                <div>16gb | 32gb</div>
                <div>color | color</div>
              </DeviceOptions>
            </DeviceInformation>
          </ProductListingItem>
        </GridItem>
      ))}
    </GridBase>
  );
};

export default ProductListing;
