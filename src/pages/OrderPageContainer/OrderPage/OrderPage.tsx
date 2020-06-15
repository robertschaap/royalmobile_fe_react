import React from 'react';
import * as S from './order-page.styles';
import { useContentCopy } from '../../../utils/useContentCopy';
import { Cart } from '../../../types/cart';

import { GridBase, GridItem } from '../../../components/Grid';
import Button from '../../../components/Button';
import ContentCopy from '../../../components/ContentCopy';
import PageSection from '../../../components/PageSection';
import SectionHeader from '../../../components/SectionHeader';

import phone from '../../../assets/images/apple_iphone-x_silver.png';
import StringUtil from '../../../utils/StringUtil';

interface OrderPageProps {
  cart: Cart;
  onClickOrder(): void;
  onClickRemove(cartItemId: string): void;
  onClickReturn(): void;
}

const OrderPage: React.FC<OrderPageProps> = (props) => {
  const {
    cart,
    onClickOrder,
    onClickRemove,
    onClickReturn,
  } = props;

  return (
    <PageSection>
      <SectionHeader>{useContentCopy('order.order')}</SectionHeader>
        {cart.items.map((item, index) => (
          <S.CartItem key={index}>
            <S.DeviceImage>
              <img width="100%" alt="phone" src={phone} />
            </S.DeviceImage>
            <div>
              <S.DeviceName>
                {item.product.model}{' '}
                {item.product.variants[0].capacity}{' '}
                {StringUtil.capitalise(item.product.variants[0].color)}
              </S.DeviceName>
              <div>{item.product.manufacturer}</div>
            </div>
            <S.CartItemTotal>
              <S.CartItemTotalType>
                <ContentCopy messageId='order.monthlyPayment' />
                <span>{StringUtil.formatPrice(item.totals.monthly_price)}</span>
              </S.CartItemTotalType>
              <S.CartItemTotalType>
                <ContentCopy messageId='order.oneTimePayment' />
                <span>{StringUtil.formatPrice(item.totals.onetime_price)}</span>
              </S.CartItemTotalType>
            </S.CartItemTotal>
            <S.CartItemRemove>
              <S.CartItemRemoveButton onClick={() => onClickRemove(index.toString())}>
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
              <S.Total>{StringUtil.formatPrice(cart.totals.monthly_price)}</S.Total>
            </S.TotalCard>
          </GridItem>
          <GridItem
            md={2}
            lg={2}>
            <S.TotalCard>
              {useContentCopy('order.totalOneTimePayment')}
              <S.Total>{StringUtil.formatPrice(cart.totals.onetime_price)}</S.Total>
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
