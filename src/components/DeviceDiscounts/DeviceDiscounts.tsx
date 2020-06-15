import React from 'react';
import * as S from './device-discounts.styles';
import { useContentCopy } from '../../utils/useContentCopy';

const DeviceDiscounts: React.FC = () => {
  return (
    <S.DeviceDiscountsBase>
      <S.DeviceDiscountItem>
        <span>{useContentCopy('common.sale')}</span>
      </S.DeviceDiscountItem>
      <S.DeviceDiscountItem>
        <span>{useContentCopy('common.sale')}</span>
      </S.DeviceDiscountItem>
      <S.DeviceDiscountItem>
        <span>{useContentCopy('common.sale')}</span>
      </S.DeviceDiscountItem>
    </S.DeviceDiscountsBase>
  );
};

export default DeviceDiscounts;
