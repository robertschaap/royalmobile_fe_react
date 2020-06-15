import React from 'react';
import * as S from './product-page-order.styles';

import { ContentUtil } from '../../../utils/ContentUtil';

import { GridBase, GridItem } from '../../../components/Grid';
import Button from '../../../components/Button';
import PageSection from '../../../components/PageSection';

interface ProductPageOrderProps {
  hasSelection: boolean;
  onClickOrder(): void;
  onClickRenewContract(): void;
}

const ProductPageOrder: React.FC<ProductPageOrderProps> = (props) => {
  const {
    hasSelection,
    onClickOrder,
    onClickRenewContract,
  } = props;

  return (
    <PageSection>
      <GridBase>
        <GridItem lg={2}>
          <S.OrderButton
            disabled={!hasSelection}
            variant="primary"
            onClick={onClickOrder}>
            {ContentUtil('order.readyToOrder')}
          </S.OrderButton>
          <Button
            disabled={!hasSelection}
            variant="secondary"
            onClick={onClickRenewContract}>
            {ContentUtil('order.renewContract')}
          </Button>
        </GridItem>
      </GridBase>
    </PageSection>
  );
};

export default ProductPageOrder;
