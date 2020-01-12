import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import ProductPageSummary from './ProductPageSummary';
import ProductPageConfigure from './ProductPageConfigure';
import ProductPageCustomise from './ProductPageCustomise';
import PageSection from './PageSection';
import { useContentCopy } from '../hooks';
import { GridBase, GridItem } from './Grid';

const OrderButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const ProductPage: React.FC = () => {
  return (
    <>
      <ProductPageCustomise />
      <ProductPageConfigure />
      <ProductPageSummary />
      <PageSection>
        <GridBase>
          <GridItem lg={2}>
            <OrderButton
              variant="primary">
              {useContentCopy('order.readyToOrder')}
            </OrderButton>
            <Button
              variant="secondary">
              {useContentCopy('order.renewContract')}
            </Button>
          </GridItem>
        </GridBase>
      </PageSection>
    </>
  );
};

export default ProductPage;
