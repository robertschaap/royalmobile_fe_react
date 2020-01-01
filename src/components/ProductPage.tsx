import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import ProductPageSummary from './ProductPageSummary';
import ProductPageConfigure from './ProductPageConfigure';
import ProductPageCustomise from './ProductPageCustomise';
import PageSection from './PageSection';
import { useContentCopy } from '../hooks';

const OrderButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const ProductPage: React.FC = () => {
  return (
    <>
      <ProductPageCustomise />
      <ProductPageConfigure />
      <ProductPageSummary />
      <PageSection>
        <OrderButton
          variant="primary">
          {useContentCopy('order.readyToOrder')}
        </OrderButton>
        <Button
          variant="secondary">
          {useContentCopy('order.renewContract')}
        </Button>
      </PageSection>
    </>
  );
};

export default ProductPage;
