import React from 'react';
import * as S from './product-page-customise.styles';

import DeviceCapacityListing from '../DeviceCapacityListing';
import DeviceColorListing from '../DeviceColorListing';
import DeviceDiscounts from '../DeviceDiscounts';
import DeviceRating from '../DeviceRating';
import Hidden from '../Hidden';

import phone from '../../assets/images/apple_iphone-x_silver.png';
import { useContentCopy } from '../../hooks';

interface ProductPageCustomiseProps {
  capacities: {
    id: string;
    capacity: string;
  }[];
  colors: {
    id: string;
    color: string;
    colorHex: string;
  }[];
  deviceCost: string;
  deviceManufacturer: string;
  deviceName: string;
  onClickCapacity(id: string): void;
  onClickColor(id: string): void;
  selectedVariantId: string;
}

const ProductPageCustomise: React.FC<ProductPageCustomiseProps> = (props) => {
  const {
    capacities,
    colors,
    deviceCost,
    deviceManufacturer,
    deviceName,
    onClickCapacity,
    onClickColor,
    selectedVariantId,
  } = props;

  return (
    <S.Flexy>
      <S.Card>
        <S.DeviceImage>
          <img width="100%" alt="phone" src={phone} />
        </S.DeviceImage>
        <Hidden md lg>
          <S.DeviceName>{deviceName}</S.DeviceName>
          <S.DeviceManufacturer>{deviceManufacturer}</S.DeviceManufacturer>
          <DeviceDiscounts />
        </Hidden>
      </S.Card>

      <S.DeviceCustomisationOptions>
        <Hidden sm>
          <S.DeviceName>{deviceName}</S.DeviceName>
          <S.DeviceManufacturer>{deviceManufacturer}</S.DeviceManufacturer>
          <DeviceDiscounts />
        </Hidden>
        <S.DeviceColor>
          <div>{useContentCopy('product.pickDeviceColor')}</div>
          <DeviceColorListing
            colors={colors}
            onClickColor={onClickColor}
            selectedColorId={selectedVariantId} />
        </S.DeviceColor>
        <S.DeviceCapacity>
          <div>{useContentCopy('product.pickDeviceCapacity')}</div>
          <DeviceCapacityListing
            capacities={capacities}
            onClickCapacity={onClickCapacity}
            selectedCapacityId={selectedVariantId} />
        </S.DeviceCapacity>
        <div>{useContentCopy('product.phoneCostUpfront')}</div>
        <S.DeviceCost>{deviceCost}</S.DeviceCost>
      </S.DeviceCustomisationOptions>

      <S.ProductDescription>
        <DeviceRating />
        <S.DeviceDescription>The iPhone X is Apple’s latest attempt at a near bezel-less device and a minor failure as far as that goes. The device is disgraced by a thick and weird notch, a trend that for some inexplicable reason scores of phone manufactureres seem to have copied. We thouroughly dislike this phone but feel you should buy it anyway because we’ll make money.</S.DeviceDescription>
        <div>{useContentCopy('product.deviceSpecifications')}</div>
      </S.ProductDescription>
    </S.Flexy>
  );
};

export default ProductPageCustomise;
