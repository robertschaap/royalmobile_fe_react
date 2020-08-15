import React from 'react';

import { ContentUtil } from '../../utils/ContentUtil';

import * as S from './device-discounts.styles';

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
