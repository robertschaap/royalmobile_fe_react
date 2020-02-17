import React from 'react';
import styled from 'styled-components';

import { useContentCopy } from '../hooks';

import { GridBase, GridItem } from './Grid';
import Button from './Button';
import PageSection from './PageSection';

const OrderButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const ProductPageOrder: React.FC = () => {
  return (
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
  )
}

export default ProductPageOrder;
