import React from 'react';
import styled from 'styled-components';

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

const ProductPageSummary: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>Summing it all up</SectionHeader>
      <OrderSummaryText />
      <Card marginBottom={2}>
        10gb data
      </Card>
      <Card marginBottom={4}>
        Your monthly payment
      </Card>
      <Card marginBottom={2}>
        10gb data
      </Card>
      <Card>
        Your one-time payment
      </Card>
    </PageSection>
  );
};

export default ProductPageSummary;
