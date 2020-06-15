import React from 'react';
import * as S from './device-discounts.styles';
import { ContentUtil } from '../../utils/ContentUtil';

const DeviceDiscounts: React.FC = () => {
  return (
    <S.DeviceDiscountsBase>
      <S.DeviceDiscountItem>
        <span>{ContentUtil('common.sale')}</span>
      </S.DeviceDiscountItem>
      <S.DeviceDiscountItem>
        <span>{ContentUtil('common.sale')}</span>
      </S.DeviceDiscountItem>
      <S.DeviceDiscountItem>
        <span>{ContentUtil('common.sale')}</span>
      </S.DeviceDiscountItem>
    </S.DeviceDiscountsBase>
  );
};

export default DeviceDiscounts;
