import React from 'react';
import styled from 'styled-components';

import { useContentCopy } from '../hooks';

import { GridBase, GridItem } from './Grid';
import Button from './Button';
import PageSection from './PageSection';

const OrderButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

interface ProductPageOrderProps {
  onClickOrder(): void;
  onClickRenewContract(): void;
}

const ProductPageOrder: React.FC<ProductPageOrderProps> = (props) => {
  const { onClickOrder, onClickRenewContract } = props;

  return (
    <PageSection>
      <GridBase>
        <GridItem lg={2}>
          <OrderButton
            variant="primary"
            onClick={onClickOrder}>
            {useContentCopy('order.readyToOrder')}
          </OrderButton>
          <Button
            variant="secondary"
            onClick={onClickRenewContract}>
            {useContentCopy('order.renewContract')}
          </Button>
        </GridItem>
      </GridBase>
    </PageSection>
  )
}

export default ProductPageOrder;
