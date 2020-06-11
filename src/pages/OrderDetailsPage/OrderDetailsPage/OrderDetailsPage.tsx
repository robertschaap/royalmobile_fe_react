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
          isRequired
          label={useContentCopy('order.form.initials')}
          placeholder={useContentCopy('order.form.initials')} />
        <Input
          {...form.getFieldProps('lastname')}
          isRequired
          label={useContentCopy('order.form.lastName')}
          placeholder={useContentCopy('order.form.lastName')} />
        <Select
          {...form.getFieldProps('sex')}
          options={sexOptions}
          label={useContentCopy('order.form.sex')} />
        <Input
          {...form.getFieldProps('zipcode')}
          isRequired
          label={useContentCopy('order.form.zipCode')}
          placeholder={useContentCopy('order.form.zipCode')} />
        <Input
          {...form.getFieldProps('housenumber')}
          isRequired
          label={useContentCopy('order.form.houseNumber')}
          placeholder={useContentCopy('order.form.houseNumber')} />
        <Select
          {...form.getFieldProps('country')}
          options={countryOptions}
          label={useContentCopy('order.form.country')} />
      </PageSection>
      <PageSection>
        <SectionHeader>{useContentCopy('order.paymentDetails')}</SectionHeader>
        <Input
          {...form.getFieldProps('iban')}
          isRequired
          label={useContentCopy('order.form.bankAccount')}
          placeholder={useContentCopy('order.form.bankAccount')} />
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
