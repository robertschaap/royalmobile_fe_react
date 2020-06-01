import React from 'react';
import * as S from './order-page.styles';
import { useContentCopy } from '../../../hooks';
import noop from '../../../utils/noop';

import Button from '../../../components/Button';
import PageSection from '../../../components/PageSection';
import SectionHeader from '../../../components/SectionHeader';

const OrderPage: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>{useContentCopy('Your order')}</SectionHeader>
      <div>
        <div>A Cart Item</div>
        <div>A Cart Item</div>
      </div>
      <div>Subtotal</div>
      <S.OrderButton
        variant="primary"
        onClick={noop}>
        {useContentCopy('I\'m ready to pay!')}
      </S.OrderButton>
      <Button
        variant="secondary"
        onClick={noop}>
        {useContentCopy('I want to keep shopping')}
      </Button>
    </PageSection>
  );
};

export default OrderPage;
