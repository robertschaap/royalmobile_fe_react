import React from 'react';
import * as S from './device-discounts.styles';

const DeviceDiscounts: React.FC = () => {
  return (
    <S.DeviceDiscountsBase>
      <S.DeviceDiscountItem>
        <span>Sale</span>
      </S.DeviceDiscountItem>
      <S.DeviceDiscountItem>
        <span>Sale</span>
      </S.DeviceDiscountItem>
      <S.DeviceDiscountItem>
        <span>Sale</span>
      </S.DeviceDiscountItem>
    </S.DeviceDiscountsBase>
  );
};

export default DeviceDiscounts;
