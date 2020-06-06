import React from 'react';
import * as S from './order-page.styles';
import { useContentCopy } from '../../../hooks';
import { CartItem } from '../../../types/cart';

import { GridBase, GridItem } from '../../../components/Grid';
import Button from '../../../components/Button';
import ContentCopy from '../../../components/ContentCopy';
import PageSection from '../../../components/PageSection';
import SectionHeader from '../../../components/SectionHeader';

import phone from '../../../assets/images/apple_iphone-x_silver.png';

interface OrderPageProps {
  cartItems: CartItem[];
  onClickOrder(): void;
  onClickRemove(): void;
  onClickReturn(): void;
}

const OrderPage: React.FC<OrderPageProps> = (props) => {
  const {
    cartItems,
    onClickOrder,
    onClickRemove,
    onClickReturn,
  } = props;

  return (
    <PageSection>
      <SectionHeader>{useContentCopy('order.order')}</SectionHeader>
        {cartItems.map((_, index) => (
          <S.CartItem key={index}>
            <S.DeviceImage>
              <img width="100%" alt="phone" src={phone} />
            </S.DeviceImage>
            {index}
            <S.CartItemTotal>
              <S.CartItemTotalType>
                <ContentCopy messageId='order.monthlyPayment' />
                <span>0,00</span>
              </S.CartItemTotalType>
              <S.CartItemTotalType>
                <ContentCopy messageId='order.oneTimePayment' />
                <span>0,00</span>
              </S.CartItemTotalType>
            </S.CartItemTotal>
            <S.CartItemRemove>
              <S.CartItemRemoveButton onClick={onClickRemove}>
                <ContentCopy messageId='order.removeCartItem' />
              </S.CartItemRemoveButton>
            </S.CartItemRemove>
          </S.CartItem>
        ))}

        <GridBase>
          <GridItem
            md={2}
            lg={2}>
            <S.TotalCard>
              {useContentCopy('order.totalMonthlyPayment')}
              <S.Total>0,00</S.Total>
            </S.TotalCard>
          </GridItem>
          <GridItem
            md={2}
            lg={2}>
            <S.TotalCard>
              {useContentCopy('order.totalOneTimePayment')}
              <S.Total>0,00</S.Total>
            </S.TotalCard>
          </GridItem>
        </GridBase>

      <S.OrderButton
        variant="primary"
        onClick={onClickOrder}>
        {useContentCopy('order.readyToPay')}
      </S.OrderButton>
      <Button
        variant="secondary"
        onClick={onClickReturn}>
        {useContentCopy('order.keepShopping')}
      </Button>
    </PageSection>
  );
};

export default OrderPage;
