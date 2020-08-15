import React from 'react';

import Button from '../../../components/Button';
import { GridBase, GridItem } from '../../../components/Grid';
import PageSection from '../../../components/PageSection';
import { ContentUtil } from '../../../utils/ContentUtil';

import * as S from './product-page-order.styles';

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
            data-testid="place-order-button"
            disabled={!hasSelection}
            variant="primary"
            onClick={onClickOrder}>
            {ContentUtil('order.readyToOrder')}
          </S.OrderButton>
          <Button
            disabled
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
