import React from 'react';
import styled, { css } from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';
import { useContentCopy } from '../hooks';

import OrderSummaryText from './OrderSummaryText';
import PageSection from './PageSection';
import SectionHeader from './SectionHeader';

interface CardProps {
  marginBottom?: number;
}

const Card = styled.div<CardProps>`
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ marginBottom, theme }) => theme.spacing(marginBottom || 0)};
`;

const SubTotalCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubTotal = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.color.primary};

  ${media_breakpoint_up.md} {
    font-size: 32px;
  }
`;

const SummaryList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

interface SummaryListItemProps {
  isDiscount?: boolean;
}

const SummaryListItem = styled.li<SummaryListItemProps>`
  display: flex;
  justify-content: space-between;

  ${({ isDiscount, theme }) => (isDiscount
    ? css` color: ${theme.color.primary};`
    : css``
  )}
`;

const ProductPageSummary: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.summingUp')}</SectionHeader>
      <OrderSummaryText />
      <Card marginBottom={2}>
        <SummaryList>
          <SummaryListItem>10gb data<span>20,00</span></SummaryListItem>
          <SummaryListItem>unlimited calls</SummaryListItem>
          <SummaryListItem>unlimited texts</SummaryListItem>
          <SummaryListItem>unlimited roaming</SummaryListItem>
          <SummaryListItem>iPhone X 16gb Lime<span>0,00</span></SummaryListItem>
          <SummaryListItem isDiscount>Discounts<span>-1,00</span></SummaryListItem>
        </SummaryList>
      </Card>
      <SubTotalCard marginBottom={4}>
        {useContentCopy('product.monthlyPayment')}
        <SubTotal>19,00</SubTotal>
      </SubTotalCard>
      <Card marginBottom={2}>
        <SummaryList>
          <SummaryListItem>iPhone X 16gb Lime<span>265,00</span></SummaryListItem>
          <SummaryListItem>Connection Fee<span>10,00</span></SummaryListItem>
          <SummaryListItem>Shipping<span>7,50</span></SummaryListItem>
          <SummaryListItem isDiscount>Discounts<span>-17,50</span></SummaryListItem>
        </SummaryList>
      </Card>
      <SubTotalCard>
        {useContentCopy('product.oneTimePayment')}
        <SubTotal>265,00</SubTotal>
      </SubTotalCard>
    </PageSection>
  );
};

export default ProductPageSummary;
