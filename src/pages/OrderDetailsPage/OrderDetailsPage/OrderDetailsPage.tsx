import React from 'react';
import * as S from './order-details-page.styles';
import { useContentCopy, useForm } from '../../../hooks';

import { Input, Select } from '../../../components/FormFields/FormFields';
import Button from '../../../components/Button';
import PageSection from '../../../components/PageSection';
import SectionHeader from '../../../components/SectionHeader';

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
      sex: 'male',
      zipcode: '',
      housenumber: '',
      country: 'nl',
      iban: '',
    },
    onSubmit: onSubmitOrder,
  });

  const sexOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const countryOptions = [
    { value: 'nl', label: 'Netherlands' },
  ];

  return (
    <>
      <PageSection>
        <SectionHeader>{useContentCopy('order.personalDetails')}</SectionHeader>
        <Input
          {...form.getFieldProps('initials')}
          label="Initials"
          placeholder="Initials" />
        <Input
          {...form.getFieldProps('lastname')}
          label="Last name"
          placeholder="Last name" />
        <Select
          {...form.getFieldProps('sex')}
          options={sexOptions}
          label="Sex" />
        <Input
          {...form.getFieldProps('zipcode')}
          label="Zip Code"
          placeholder="Zip Code" />
        <Input
          {...form.getFieldProps('housenumber')}
          label="House number"
          placeholder="House number" />
        <Select
          {...form.getFieldProps('country')}
          options={countryOptions}
          label="Country" />
      </PageSection>
      <PageSection>
        <SectionHeader>{useContentCopy('order.paymentDetails')}</SectionHeader>
        <Input
          {...form.getFieldProps('iban')}
          label="Bank account"
          placeholder="Bank account" />
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
