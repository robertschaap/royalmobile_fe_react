import React from 'react';
import * as S from './product-page-summary.styles';
import { useContentCopy } from '../../../hooks';
import { ProductVariant } from '../../../types/products';
import { Subscription } from '../../../types/subscriptions';

import OrderSummaryText from '../OrderSummaryText/OrderSummaryText';
import { GridBase, GridItem } from '../../../components/Grid';
import StringUtil from '../../../utils/StringUtil';

interface ProductPageSummaryProps {
  deviceModel: string;
  selectedSubscription: Subscription;
  selectedVariant: ProductVariant;
}

const ProductPageSummary: React.FC<ProductPageSummaryProps> = (props) => {
  const {
    deviceModel,
    selectedSubscription,
    selectedVariant,
  } = props;

  const deviceColor = StringUtil.capitalise(selectedVariant.color);
  const deviceName = `${deviceModel} ${selectedVariant.capacity} ${deviceColor}`;

  const monthlyPaymentTotal = selectedSubscription.regular_price;
  const oneTimePaymentTotal = selectedVariant.discounted_price;

  // makes sure this comes from the api instead of FE calculation
  const oneTimeDiscounts = Number(selectedVariant.regular_price) - Number(selectedVariant.discounted_price);

  return (
    <GridBase>
      <GridItem
        md={2}
        lg={2}
        mdOrder={1}
        lgOrder={1}>
        <OrderSummaryText />
      </GridItem>
      <GridItem
        md={2}
        lg={2}>
        <S.Card marginBottom={2}>
          <S.SummaryList>
            <S.SummaryListItem>{selectedSubscription.data} data<span>{selectedSubscription.regular_price}</span></S.SummaryListItem>
            {selectedSubscription.benefits_long.map((benefit, index) => (
              <S.SummaryListItem key={index}>{benefit}</S.SummaryListItem>
            ))}
            <S.SummaryListItem>{deviceName}<span>0,00</span></S.SummaryListItem>
            <S.SummaryListItem isDiscount>Discounts<span>0,00</span></S.SummaryListItem>
          </S.SummaryList>
        </S.Card>
        <S.SubTotalCard marginBottom={4}>
          {useContentCopy('product.monthlyPayment')}
          <S.SubTotal>{monthlyPaymentTotal}</S.SubTotal>
        </S.SubTotalCard>
        <S.Card marginBottom={2}>
          < S.SummaryList>
            <S.SummaryListItem>{deviceName}<span>{selectedVariant.regular_price}</span></S.SummaryListItem>
            <S.SummaryListItem>Connection Fee<span>0,00</span></S.SummaryListItem>
            <S.SummaryListItem>Shipping<span>0,00</span></S.SummaryListItem>
            <S.SummaryListItem isDiscount>Discounts<span>{oneTimeDiscounts.toString()}</span></S.SummaryListItem>
          </S.SummaryList>
        </S.Card>
        <S.SubTotalCard>
          {useContentCopy('product.oneTimePayment')}
          <S.SubTotal>{oneTimePaymentTotal}</S.SubTotal>
        </S.SubTotalCard>
      </GridItem>
    </GridBase>
  );
};

export default ProductPageSummary;
