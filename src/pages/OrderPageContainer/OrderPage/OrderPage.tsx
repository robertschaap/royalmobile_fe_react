import React from 'react';
import * as S from './order-page.styles';
import { useContentCopy } from '../../../hooks';
import noop from '../../../utils/noop';

import { GridBase, GridItem } from '../../../components/Grid';
import Button from '../../../components/Button';
import ContentCopy from '../../../components/ContentCopy';
import PageSection from '../../../components/PageSection';
import SectionHeader from '../../../components/SectionHeader';

import phone from '../../../assets/images/apple_iphone-x_silver.png';

const OrderPage: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>{useContentCopy('Your order')}</SectionHeader>
        {['item', 'item'].map((item, index) => (
          <S.CartItem>
            <S.DeviceImage>
              <img width="100%" alt="phone" src={phone} />
            </S.DeviceImage>
            {item}
            <S.CartItemTotal>
              <S.CartItemTotalType>
                <ContentCopy messageId='order.monthlyPayment' />
                <span>0</span>
              </S.CartItemTotalType>
              <S.CartItemTotalType>
                <ContentCopy messageId='order.oneTimePayment' />
                <span>0</span>
              </S.CartItemTotalType>
            </S.CartItemTotal>
            <S.CartItemRemove>Remove from order</S.CartItemRemove>
          </S.CartItem>
        ))}

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
