import React from 'react';
import * as S from './order-details-page.styles';
import { ContentUtil } from '../../../utils/ContentUtil';
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
        <SectionHeader>{ContentUtil('order.personalDetails')}</SectionHeader>
        <S.Section>
          <Input
            {...form.getFieldProps('initials')}
            isRequired
            label={ContentUtil('order.form.initials')}
            placeholder={ContentUtil('order.form.initials')} />
          <Input
            {...form.getFieldProps('lastname')}
            isRequired
            label={ContentUtil('order.form.lastName')}
            placeholder={ContentUtil('order.form.lastName')} />
          <Select
            {...form.getFieldProps('sex')}
            options={sexOptions}
            label={ContentUtil('order.form.sex')} />
          <Input
            {...form.getFieldProps('email')}
            isRequired
            label={ContentUtil('order.form.email')}
            placeholder={ContentUtil('order.form.email')} />
          <Input
            {...form.getFieldProps('zipcode')}
            isRequired
            label={ContentUtil('order.form.zipCode')}
            placeholder={ContentUtil('order.form.zipCode')} />
          <Input
            {...form.getFieldProps('housenumber')}
            isRequired
            label={ContentUtil('order.form.houseNumber')}
            placeholder={ContentUtil('order.form.houseNumber')} />
          <Select
            {...form.getFieldProps('country')}
            options={countryOptions}
            label={ContentUtil('order.form.country')} />
        </S.Section>
      </PageSection>
      <PageSection>
        <SectionHeader>{ContentUtil('order.paymentDetails')}</SectionHeader>
        <S.Section>
          <Input
            {...form.getFieldProps('iban')}
            isRequired
            label={ContentUtil('order.form.bankAccount')}
            placeholder={ContentUtil('order.form.bankAccount')} />
        </S.Section>
        <S.FinaliseOrderButton
          variant="primary"
          onClick={form.onSubmit}>
          {ContentUtil('order.finaliseOrder')}
        </S.FinaliseOrderButton>
        <Button
          variant="secondary"
          onClick={onClickReturn}>
          {ContentUtil('order.keepShopping')}
        </Button>
      </PageSection>
    </>
  );
};

export default OrderDetailsPage;
