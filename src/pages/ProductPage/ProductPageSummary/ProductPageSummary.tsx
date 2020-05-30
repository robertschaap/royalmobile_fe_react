import React from 'react';
import * as S from './product-page-summary.styles';
import { useContentCopy, OrderSummary } from '../../../hooks';
import StringUtil from '../../../utils/StringUtil';

import OrderSummaryText from '../OrderSummaryText/OrderSummaryText';
import { GridBase, GridItem } from '../../../components/Grid';

interface ProductPageSummaryProps {
  deviceModel: string;
  orderSummary: OrderSummary;
}

const ProductPageSummary: React.FC<ProductPageSummaryProps> = (props) => {
  const {
    deviceModel,
    orderSummary,
  } = props;

  const deviceColor = StringUtil.capitalise(orderSummary.selectedVariant.color);
  const deviceName = `${deviceModel} ${orderSummary.selectedVariant.capacity} ${deviceColor}`;

  return (
    <GridBase>
      <GridItem
        md={2}
        lg={2}
        mdOrder={1}
        lgOrder={1}>
        <OrderSummaryText
          deviceCostOneTimePayment={orderSummary.oneTimePaymentTotal}
          deviceName={deviceName}
          oneTimePaymentTotal={orderSummary.oneTimePaymentTotal}
          selectedSubscriptionData={orderSummary.selectedSubscription.data}
          selectedSubscriptionPrice={orderSummary.monthlySubscriptionCost}
        />
      </GridItem>
      <GridItem
        md={2}
        lg={2}>
        <S.Card marginBottom={2}>
          <S.SummaryList>
            <S.SummaryListItem>{orderSummary.selectedSubscription.data} data<span>{orderSummary.monthlySubscriptionCost}</span></S.SummaryListItem>
            {orderSummary.selectedSubscription.benefits_long.map((benefit, index) => (
              <S.SummaryListItem key={index}>{benefit}</S.SummaryListItem>
            ))}
            <S.SummaryListItem>{deviceName}<span>0,00</span></S.SummaryListItem>
            <S.SummaryListItem isDiscount>Discounts<span>0,00</span></S.SummaryListItem>
          </S.SummaryList>
        </S.Card>
        <S.SubTotalCard marginBottom={4}>
          {useContentCopy('product.monthlyPayment')}
          <S.SubTotal>{orderSummary.monthlyPaymentTotal}</S.SubTotal>
        </S.SubTotalCard>
        <S.Card marginBottom={2}>
          < S.SummaryList>
            <S.SummaryListItem>{deviceName}<span>{orderSummary.oneTimeDeviceCost}</span></S.SummaryListItem>
            <S.SummaryListItem>Connection Fee<span>{orderSummary.connectionFee}</span></S.SummaryListItem>
            <S.SummaryListItem>Shipping<span>{orderSummary.shippingFee}</span></S.SummaryListItem>
            <S.SummaryListItem isDiscount>Discounts<span>{orderSummary.oneTimeDiscountTotal}</span></S.SummaryListItem>
          </S.SummaryList>
        </S.Card>
        <S.SubTotalCard>
          {useContentCopy('product.oneTimePayment')}
          <S.SubTotal>{orderSummary.oneTimePaymentTotal}</S.SubTotal>
        </S.SubTotalCard>
      </GridItem>
    </GridBase>
  );
};

export default ProductPageSummary;
