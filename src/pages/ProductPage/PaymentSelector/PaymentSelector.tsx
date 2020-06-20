import React, { useState, useEffect } from 'react';
import * as S from './payment-selector.styles';

import Toggle from '../../../components/Toggle';

const PaymentSelector: React.FC = () => {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (isToggleActive) {
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [isToggleActive]);

  if (!show) {
    return (
      null
    );
  }

  return (
    <>
      <S.ToggleWrapper>
        <S.ToggleDescription>
          Your phone is x up front. Do you want to raise your plan's monthly fee a bit so you can spread it out?
        </S.ToggleDescription>
        <Toggle
          isActive={isToggleActive}
          onChange={() => setIsToggleActive(!isToggleActive)} />
        <S.ToggleLabel>Yes!</S.ToggleLabel>
      </S.ToggleWrapper>

      {isToggleActive && (
        <S.PaymentBase>Well, you can't.</S.PaymentBase>
      )}
    </>
  );
};

export default PaymentSelector;
