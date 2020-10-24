import React from 'react';

import DeviceDiscounts from '../../../components/DeviceDiscounts';
import DeviceImage from '../../../components/DeviceImage';
import Hidden from '../../../components/Hidden';
import { ProductVariant, ProductCapacity, ProductColor } from '../../../types/products';
import { ContentUtil } from '../../../utils/ContentUtil';
import StringUtil from '../../../utils/StringUtil';
import DeviceCapacityListing from '../DeviceCapacityListing';
import DeviceColorListing from '../DeviceColorListing';
import DeviceRating from '../DeviceRating';

import * as S from './product-page-customise.styles';

interface ProductPageCustomiseProps {
  capacities: ProductCapacity[];
  colors: ProductColor[];
  deviceManufacturer: string;
  deviceModel: string;
  deviceModelId: string;
  onClickColorOrCapacity(id: string): void;
  selectedVariant: ProductVariant;
}

const ProductPageCustomise: React.FC<ProductPageCustomiseProps> = (props) => {
  const {
    capacities,
    colors,
    deviceManufacturer,
    deviceModel,
    deviceModelId,
    onClickColorOrCapacity,
    selectedVariant,
  } = props;

  const deviceColor = StringUtil.capitalise(selectedVariant.color);
  const deviceCost = StringUtil.formatRoundedPrice(selectedVariant.regular_price);
  const deviceName = `${deviceModel} ${selectedVariant.capacity} ${deviceColor}`;
  const deviceDescription = 'The iPhone 12 is Apple’s latest attempt at a near notch-less device and an unsuccesful one as far as that goes. The device is disgraced by the notch, a trend that for some inexplicable reason scores of phone manufacturers seem to have copied, and even though most have moved away from, Apple insists on continuing. We still think you should buy it, just because it reminds you of the iPhone 5 (wasn\'t that nice) and because it will make us money.';

  return (
    <S.Flexy data-testid="product-page-customise">
      <S.Card>
        <S.DeviceImages>
          {colors.map(({ color }) => (
            <S.DeviceImage key={color} isSelected={selectedVariant.color === color}>
              <DeviceImage
                modelId={deviceModelId}
                color={color} />
            </S.DeviceImage>
          ))}
        </S.DeviceImages>
        <Hidden md lg>
          <S.DeviceName data-testid="device-name">{deviceName}</S.DeviceName>
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
          <div>{ContentUtil('product.pickDeviceColor')}</div>
          <DeviceColorListing
            colors={colors}
            onClickColor={onClickColorOrCapacity}
            selectedColorId={selectedVariant.variantId} />
        </S.DeviceColor>
        <S.DeviceCapacity>
          <div>{ContentUtil('product.pickDeviceCapacity')}</div>
          <DeviceCapacityListing
            capacities={capacities}
            onClickCapacity={onClickColorOrCapacity}
            selectedCapacityId={selectedVariant.variantId} />
        </S.DeviceCapacity>
        <div>{ContentUtil('product.phoneCostUpfront')}</div>
        <S.DeviceCost>{deviceCost}</S.DeviceCost>
      </S.DeviceCustomisationOptions>

      <S.ProductDescription>
        <DeviceRating />
        <S.DeviceDescription>{deviceDescription}</S.DeviceDescription>
      </S.ProductDescription>
    </S.Flexy>
  );
};

export default ProductPageCustomise;
