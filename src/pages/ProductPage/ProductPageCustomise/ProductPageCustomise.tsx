import React from 'react';
import * as S from './product-page-customise.styles';

import DeviceCapacityListing from '../DeviceCapacityListing';
import DeviceColorListing from '../DeviceColorListing';
import DeviceDiscounts from '../../../components/DeviceDiscounts';
import DeviceRating from '../DeviceRating';
import Hidden from '../../../components/Hidden';

import phone from '../../../assets/images/apple_iphone-x_silver.png';
import { useContentCopy } from '../../../hooks';
import { ProductVariant, ProductCapacity, ProductColor } from '../../../types/products';
import StringUtil from '../../../utils/StringUtil';

interface ProductPageCustomiseProps {
  capacities: ProductCapacity[];
  colors: ProductColor[];
  deviceManufacturer: string;
  deviceModel: string;
  onClickColorOrCapacity(id: string): void;
  selectedVariant: ProductVariant;
}

const ProductPageCustomise: React.FC<ProductPageCustomiseProps> = (props) => {
  const {
    capacities,
    colors,
    deviceManufacturer,
    deviceModel,
    onClickColorOrCapacity,
    selectedVariant,
  } = props;

  const deviceColor = StringUtil.capitalise(selectedVariant.color);
  const deviceCost = StringUtil.formatRoundedPrice(selectedVariant.regular_price);
  const deviceName = `${deviceModel} ${selectedVariant.capacity} ${deviceColor}`;
  const deviceDescription = 'The iPhone X is Apple’s latest attempt at a near bezel-less device and a minor failure as far as that goes. The device is disgraced by a thick and weird notch, a trend that for some inexplicable reason scores of phone manufactureres seem to have copied. We thouroughly dislike this phone but feel you should buy it anyway because we’ll make money.';

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
            onClickColor={onClickColorOrCapacity}
            selectedColorId={selectedVariant.variantId} />
        </S.DeviceColor>
        <S.DeviceCapacity>
          <div>{useContentCopy('product.pickDeviceCapacity')}</div>
          <DeviceCapacityListing
            capacities={capacities}
            onClickCapacity={onClickColorOrCapacity}
            selectedCapacityId={selectedVariant.variantId} />
        </S.DeviceCapacity>
        <div>{useContentCopy('product.phoneCostUpfront')}</div>
        <S.DeviceCost>{deviceCost}</S.DeviceCost>
      </S.DeviceCustomisationOptions>

      <S.ProductDescription>
        <DeviceRating />
        <S.DeviceDescription>{deviceDescription}</S.DeviceDescription>
        <div>{useContentCopy('product.deviceSpecifications')}</div>
      </S.ProductDescription>
    </S.Flexy>
  );
};

export default ProductPageCustomise;
