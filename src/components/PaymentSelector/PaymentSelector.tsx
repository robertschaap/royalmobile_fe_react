import React from 'react';
import * as S from './payment-selector.styles';

import { GridBase, GridItem } from '../Grid';
import Toggle from '../Toggle';

interface PaymentSelectorProps {
  onChangeToggle(): void;
  isToggleActive: boolean;
}

const PaymentSelector: React.FC<PaymentSelectorProps> = (props) => {
  const { onChangeToggle, isToggleActive } = props;

  return (
    <>
      <S.ToggleWrapper>
        <S.ToggleDescription>
          Your phone is x up front. Do you want to raise your plan's monthly fee a bit so you can spread it out?
          </S.ToggleDescription>
        <Toggle
          isActive={isToggleActive}
          onChange={onChangeToggle} />
        <S.ToggleLabel>Yes!</S.ToggleLabel>
      </S.ToggleWrapper>

      <GridBase>
        <GridItem lg={2}>
          <S.PaymentBase>
            <S.PaymentAdjustmentAmount>50,-</S.PaymentAdjustmentAmount>
            <S.PaymentAdjustmentDescription>per month, your new up front is</S.PaymentAdjustmentDescription>
            <S.AdjustedPaymentAmount>50,-</S.AdjustedPaymentAmount>
          </S.PaymentBase>
        </GridItem>
      </GridBase>
    </>
  );
};

export default PaymentSelector;
