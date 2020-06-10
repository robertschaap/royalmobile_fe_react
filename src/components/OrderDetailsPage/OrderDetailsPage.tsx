import React from 'react';
import * as S from './order-details-page.styles';
import { useContentCopy, useForm } from '../../hooks';

import { Input } from '../FormFields/FormFields';
import Button from '../Button';
import PageSection from '../PageSection';
import SectionHeader from '../SectionHeader';

interface OrderDetailsPageProps {
  onClickReturn(): void;
  onSubmitOrder(v: unknown): void;
}

const OrderDetailsPage: React.FC<OrderDetailsPageProps> = (props) => {
  const { onClickReturn, onSubmitOrder } = props;

  const form = useForm({
    initialValues: {
      initials: '',
      lastname: '',
      sex: '',
      zipcode: '',
      housenumber: '',
      country: '',
      iban: '',
    },
    onSubmit: onSubmitOrder,
  });

  return (
    <>
      <PageSection>
        <SectionHeader>{useContentCopy('order.personalDetails')}</SectionHeader>
        <Input {...form.getFieldProps('initials')} label="Initials" placeholder="Initials" />
        <Input {...form.getFieldProps('lastname')} label="Last name" placeholder="Last name" />
        <Input {...form.getFieldProps('sex')} label="Sex" placeholder="Sex" />
        <Input {...form.getFieldProps('zipcode')} label="Zip Code" placeholder="Zip Code" />
        <Input {...form.getFieldProps('housenumber')} label="Huse number" placeholder="House number" />
        <Input {...form.getFieldProps('country')} label="Country" placeholder="Country" />
      </PageSection>
      <PageSection>
        <SectionHeader>{useContentCopy('order.paymentDetails')}</SectionHeader>
        <Input {...form.getFieldProps('iban')} label="Bank account" placeholder="Bank account" />
        <S.FinaliseOrderButton
          variant="primary"
          onClick={form.onSubmit}>
          {useContentCopy('order.finaliseOrder')}
        </S.FinaliseOrderButton>
        <Button
          variant="secondary"
          onClick={onClickReturn}>
          {useContentCopy('order.keepShopping')}
        </Button>
      </PageSection>
    </>
  );
};

export default OrderDetailsPage;
