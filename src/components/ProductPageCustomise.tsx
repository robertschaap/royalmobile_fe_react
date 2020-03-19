import React from 'react';
import styled from 'styled-components';

import DeviceCapacityListing from './DeviceCapacityListing';
import DeviceColorListing from './DeviceColorListing';
import DeviceDiscounts from './DeviceDiscounts';
import DeviceRating from './DeviceRating';
import Hidden from './Hidden';

import phone from '../assets/images/apple_iphone-x_silver.png';
import { media_breakpoint_up } from '../styles/theme';
import { useContentCopy } from '../hooks';

const ProductDescription = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(4)};
  flex: 0 0 100%;

  ${media_breakpoint_up.lg} {
    flex: 0 0 350px;
  }
`;

const Card = styled.div`
  display: flex;
  flex: 0 0 100%;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  ${media_breakpoint_up.md} {
    flex: none;
  }

  ${media_breakpoint_up.lg} {
    margin-bottom: 0;
  }
`;

const DeviceImage = styled.div`
  width: 115px;
  margin-right: ${({ theme }) => theme.spacing(4)};

  ${media_breakpoint_up.md} {
    width: 200px;
    margin-right: 0;
  }
`;

const DeviceName = styled.div`
  font-weight: 700;
`;

const DeviceManufacturer = styled.div``;


const DeviceCustomisationOptions = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(4)};
  flex: 0 0 100%;

  ${media_breakpoint_up.md} {
    padding: ${({ theme }) => theme.spacing(4)};
    flex: auto;
  }
`;

const DeviceCapacity = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const DeviceColor = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  ${media_breakpoint_up.md} {
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
`;

const DeviceDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  ${media_breakpoint_up.md} {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

const Flexy = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media_breakpoint_up.lg} {
    flex-wrap: nowrap;
  }
`;

const DeviceCost = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary}
`;

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
    <Flexy>
      <Card>
        <DeviceImage>
          <img width="100%" alt="phone" src={phone} />
        </DeviceImage>
        <Hidden md lg>
          <DeviceName>{deviceName}</DeviceName>
          <DeviceManufacturer>{deviceManufacturer}</DeviceManufacturer>
          <DeviceDiscounts />
        </Hidden>
      </Card>

      <DeviceCustomisationOptions>
        <Hidden sm>
          <DeviceName>{deviceName}</DeviceName>
          <DeviceManufacturer>{deviceManufacturer}</DeviceManufacturer>
          <DeviceDiscounts />
        </Hidden>
        <DeviceColor>
          <div>{useContentCopy('product.pickDeviceColor')}</div>
          <DeviceColorListing
            colors={colors}
            onClickColor={onClickColor}
            selectedColorId={selectedVariantId} />
        </DeviceColor>
        <DeviceCapacity>
          <div>{useContentCopy('product.pickDeviceCapacity')}</div>
          <DeviceCapacityListing
            capacities={capacities}
            onClickCapacity={onClickCapacity}
            selectedCapacityId={selectedVariantId} />
        </DeviceCapacity>
        <div>{useContentCopy('product.phoneCostUpfront')}</div>
        <DeviceCost>{deviceCost}</DeviceCost>
      </DeviceCustomisationOptions>

      <ProductDescription>
        <DeviceRating />
        <DeviceDescription>The iPhone X is Apple’s latest attempt at a near bezel-less device and a minor failure as far as that goes. The device is disgraced by a thick and weird notch, a trend that for some inexplicable reason scores of phone manufactureres seem to have copied. We thouroughly dislike this phone but feel you should buy it anyway because we’ll make money.</DeviceDescription>
        <div>{useContentCopy('product.deviceSpecifications')}</div>
      </ProductDescription>
    </Flexy>
  );
};

export default ProductPageCustomise;
