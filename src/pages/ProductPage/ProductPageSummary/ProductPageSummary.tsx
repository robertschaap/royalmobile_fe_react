import React from 'react';

import { GridBase, GridItem } from '../../../components/Grid';
import { OrderSummary } from '../../../hooks';
import { ContentUtil } from '../../../utils/ContentUtil';
import StringUtil from '../../../utils/StringUtil';
import OrderSummaryText from '../OrderSummaryText';

import * as S from './product-page-summary.styles';

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
    <GridBase data-testid="product-page-summary">
      <GridItem
        md={2}
        lg={2}
        mdOrder={1}
        lgOrder={1}>
        <OrderSummaryText
          deviceName={deviceName}
          orderSummary={orderSummary} />
      </GridItem>
      <GridItem
        md={2}
        lg={2}>
        <S.Card marginBottom={2}>
          <S.SummaryList>
            <S.SummaryListItem>{orderSummary.selectedSubscription.data} data<span>{orderSummary.monthlySubscriptionCost}</span></S.SummaryListItem>
            {orderSummary.selectedSubscription.benefits_long.map((benefit, index) => (
              <S.SummaryListItem key={index}>{StringUtil.capitalise(benefit)}</S.SummaryListItem>
            ))}
            <S.SummaryListItem>{deviceName}<span>{orderSummary.monthlyDeviceCost}</span></S.SummaryListItem>
            <S.SummaryListItem isDiscount>{ContentUtil('product.discounts')}<span>-{orderSummary.monthlyDiscountTotal}</span></S.SummaryListItem>
          </S.SummaryList>
        </S.Card>
        <S.SubTotalCard marginBottom={4}>
          {ContentUtil('product.monthlyPayment')}
          <S.SubTotal>{orderSummary.monthlyPaymentTotal}</S.SubTotal>
        </S.SubTotalCard>
        <S.Card marginBottom={2}>
          < S.SummaryList>
            <S.SummaryListItem>{deviceName}<span>{orderSummary.oneTimeDeviceCost}</span></S.SummaryListItem>
            <S.SummaryListItem>{ContentUtil('product.connectionFee')}<span>{orderSummary.connectionFee}</span></S.SummaryListItem>
            <S.SummaryListItem>{ContentUtil('product.shippingFee')}<span>{orderSummary.shippingFee}</span></S.SummaryListItem>
            <S.SummaryListItem isDiscount>{ContentUtil('product.discounts')}<span>-{orderSummary.oneTimeDiscountTotal}</span></S.SummaryListItem>
          </S.SummaryList>
        </S.Card>
        <S.SubTotalCard>
          {ContentUtil('product.oneTimePayment')}
          <S.SubTotal>{orderSummary.oneTimePaymentTotal}</S.SubTotal>
        </S.SubTotalCard>
      </GridItem>
    </GridBase>
  );
};

export default ProductPageSummary;
