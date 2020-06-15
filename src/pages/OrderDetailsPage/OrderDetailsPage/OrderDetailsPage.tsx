import React from 'react';
import * as S from './order-details-page.styles';
import { useContentCopy } from '../../../utils/useContentCopy';
import { useForm } from '../../../hooks';

import { Input, Select } from '../../../components/FormFields/FormFields';
import Button from '../../../components/Button';
import PageSection from '../../../components/PageSection';
import SectionHeader from '../../../components/SectionHeader';

interface OrderDetailsPageProps {
  onClickReturn(): void;
  onSubmitOrder<T>(v: T): void;
}

const OrderDetailsPage: React.FC<OrderDetailsPageProps> = (props) => {
  const { onClickReturn, onSubmitOrder } = props;

  const form = useForm({
    initialValues: {
      initials: '',
      lastname: '',
      sex: 'male',
      email: '',
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
        <S.Section>
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
            {...form.getFieldProps('email')}
            isRequired
            label={useContentCopy('order.form.email')}
            placeholder={useContentCopy('order.form.email')} />
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
        </S.Section>
      </PageSection>
      <PageSection>
        <SectionHeader>{useContentCopy('order.paymentDetails')}</SectionHeader>
        <S.Section>
          <Input
            {...form.getFieldProps('iban')}
            isRequired
            label={useContentCopy('order.form.bankAccount')}
            placeholder={useContentCopy('order.form.bankAccount')} />
        </S.Section>
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
