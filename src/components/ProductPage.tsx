import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import ProductPageSummary from './ProductPageSummary';
import ProductPageConfigure from './ProductPageConfigure';
import ProductPageCustomise from './ProductPageCustomise';
import PageSection from './PageSection';

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
          I'm ready to order!
        </OrderButton>
        <Button
          variant="secondary">
          I'm ready to renew my contract!
        </Button>
      </PageSection>
    </>
  );
};

export default ProductPage;
