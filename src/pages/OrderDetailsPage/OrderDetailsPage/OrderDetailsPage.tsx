import React from 'react';

import Button from '../../../components/Button';
import { Input, Select } from '../../../components/FormFields/FormFields';
import PageSection from '../../../components/PageSection';
import SectionHeader from '../../../components/SectionHeader';
import { useForm } from '../../../hooks';
import { ContentUtil } from '../../../utils/ContentUtil';
import { isRequired } from '../../../utils/FormValidators';

import * as S from './order-details-page.styles';

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
    validators: {
      initials: [isRequired],
      lastname: [isRequired],
      email: [isRequired],
      zipcode: [isRequired],
      housenumber: [isRequired],
      iban: [isRequired],
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
      <PageSection data-testid="order-details-page">
        <SectionHeader>{ContentUtil('order.personalDetails')}</SectionHeader>
        <S.Section>
          <Input
            {...form.getFieldProps('initials')}
            autoFocus
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
        {!form.isValid && <S.FormError messageId="order.form.hasErrors" />}
        <S.FinaliseOrderButton
          data-testid="finalise-order-button"
          variant="primary"
          disabled={!form.isValid}
          onClick={form.onSubmit}>
          {ContentUtil('order.finaliseOrder')}
        </S.FinaliseOrderButton>
        <Button
          data-testid="return-button"
          variant="secondary"
          onClick={onClickReturn}>
          {ContentUtil('order.keepShopping')}
        </Button>
      </PageSection>
    </>
  );
};

export default OrderDetailsPage;
