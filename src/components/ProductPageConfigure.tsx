import React from 'react';
import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';

import SectionHeader from './SectionHeader';
import DurationListing from './DurationListing';
import SubscriptionListing from './SubscriptionListing';
import PaymentSelector from './PaymentSelector';

const ProductPageConfigureBase = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${media_breakpoint_up.md} {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }
`;

const ProductPageConfigure: React.FC = () => {
  return (
    <ProductPageConfigureBase>
      <SectionHeader>Configure your plan</SectionHeader>
      <DurationListing />
      <SubscriptionListing />
      <PaymentSelector />
    </ProductPageConfigureBase>
  );
};

export default ProductPageConfigure;
