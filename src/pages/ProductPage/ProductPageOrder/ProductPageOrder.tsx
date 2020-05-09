import React from 'react';
import * as S from './product-page-order.styles';

import { useContentCopy } from '../../../hooks';

import { GridBase, GridItem } from '../../../components/Grid';
import Button from '../../../components/Button';
import PageSection from '../../../components/PageSection';

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
          <S.OrderButton
            variant="primary"
            onClick={onClickOrder}>
            {useContentCopy('order.readyToOrder')}
          </S.OrderButton>
          <Button
            variant="secondary"
            onClick={onClickRenewContract}>
            {useContentCopy('order.renewContract')}
          </Button>
        </GridItem>
      </GridBase>
    </PageSection>
  );
};

export default ProductPageOrder;
