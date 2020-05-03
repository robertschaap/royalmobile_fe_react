import React from 'react';
import * as S from './product-page-summary.styles';
import { useContentCopy } from '../../hooks';

import OrderSummaryText from '../OrderSummaryText';
import { GridBase, GridItem } from '../Grid';

const ProductPageSummary: React.FC = () => {
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
            <S.SummaryListItem>10gb data<span>20,00</span></S.SummaryListItem>
            <S.SummaryListItem>unlimited calls</S.SummaryListItem>
            <S.SummaryListItem>unlimited texts</S.SummaryListItem>
            <S.SummaryListItem>unlimited roaming</S.SummaryListItem>
            <S.SummaryListItem>iPhone X 16gb Lime<span>0,00</span></S.SummaryListItem>
            <S.SummaryListItem isDiscount>Discounts<span>-1,00</span></S.SummaryListItem>
          </S.SummaryList>
        </S.Card>
        <S.SubTotalCard marginBottom={4}>
          {useContentCopy('product.monthlyPayment')}
          <S.SubTotal>19,00</S.SubTotal>
        </S.SubTotalCard>
        <S.Card marginBottom={2}>
          <S.SummaryList>
            <S.SummaryListItem>iPhone X 16gb Lime<span>265,00</span></S.SummaryListItem>
            <S.SummaryListItem>Connection Fee<span>10,00</span></S.SummaryListItem>
            <S.SummaryListItem>Shipping<span>7,50</span></S.SummaryListItem>
            <S.SummaryListItem isDiscount>Discounts<span>-17,50</span></S.SummaryListItem>
          </S.SummaryList>
        </S.Card>
        <S.SubTotalCard>
          {useContentCopy('product.oneTimePayment')}
          <S.SubTotal>265,00</S.SubTotal>
        </S.SubTotalCard>
      </GridItem>
    </GridBase>
  );
};

export default ProductPageSummary;
