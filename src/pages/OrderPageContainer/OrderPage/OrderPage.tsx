import React from 'react';
import * as S from './order-page.styles';
import { useContentCopy } from '../../../hooks';
import noop from '../../../utils/noop';

import Button from '../../../components/Button';
import PageSection from '../../../components/PageSection';
import SectionHeader from '../../../components/SectionHeader';
import { GridBase, GridItem } from '../../../components/Grid';

const OrderPage: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>{useContentCopy('Your order')}</SectionHeader>
      <div>
        <div>A Cart Item</div>
        <div>A Cart Item</div>
      </div>

      <PageSection>
        <GridBase>
          <GridItem
            md={2}
            lg={2}>
            <S.TotalCard>
              {useContentCopy('order.totalMonthlyPayment')}
              <S.Total>Total</S.Total>
            </S.TotalCard>
          </GridItem>
          <GridItem
            md={2}
            lg={2}>
            <S.TotalCard>
              {useContentCopy('order.totalOneTimePayment')}
              <S.Total>Total</S.Total>
            </S.TotalCard>
          </GridItem>
        </GridBase>
      </PageSection>

      <S.OrderButton
        variant="primary"
        onClick={noop}>
        {useContentCopy('order.readyToPay')}
      </S.OrderButton>
      <Button
        variant="secondary"
        onClick={noop}>
        {useContentCopy('order.keepShopping')}
      </Button>
    </PageSection>
  );
};

export default OrderPage;
