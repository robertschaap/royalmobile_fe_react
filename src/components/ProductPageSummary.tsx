import React from 'react';
import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';

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

const ProductPageSummary: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>Summing it all up</SectionHeader>
      <OrderSummaryText />
      <Card marginBottom={2}>
        10gb data
      </Card>
      <SubTotalCard marginBottom={4}>
        Your monthly payment
        <SubTotal>40,00</SubTotal>
      </SubTotalCard>
      <Card marginBottom={2}>
        10gb data
      </Card>
      <SubTotalCard>
        Your one-time payment
        <SubTotal>40,00</SubTotal>
      </SubTotalCard>
    </PageSection>
  );
};

export default ProductPageSummary;
