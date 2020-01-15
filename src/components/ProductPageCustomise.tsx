import React from 'react';
import styled from 'styled-components';

import DeviceCapacityListing from './DeviceCapacityListing';
import DeviceColorListing from './DeviceColorListing';
import DeviceDiscounts from './DeviceDiscounts';
import DeviceRating from './DeviceRating';
import Hidden from './Hidden';
import PageSection from './PageSection';
import SectionHeader from './SectionHeader';

import phone from '../assets/images/apple_iphone-x_silver.png';
import { useContentCopy } from '../hooks';

const ProductDescription = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(4)};
`;

const Card = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(4)};
`;

const DeviceImage = styled.div`
  width: 115px;
  margin-right: ${({ theme }) => theme.spacing(4)};
`;

const DeviceName = styled.div`
  font-weight: 700;
`;

const DeviceManufacturer = styled.div``;


const DeviceShit = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(4)};
`;

const DeviceCapacity = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const DeviceColor = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const DeviceDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const ProductPageCustomise: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.customiseDevice')}</SectionHeader>
      <Card>
        <DeviceImage>
          <img width="100%" alt="phone" src={phone} />
        </DeviceImage>
        <Hidden md lg>
          <DeviceName>Device name</DeviceName>
          <DeviceManufacturer>Device manufacturer</DeviceManufacturer>
          <DeviceDiscounts />
        </Hidden>
      </Card>

      <DeviceShit>
        <Hidden sm>
          <DeviceName>Device name</DeviceName>
          <DeviceManufacturer>Device manufacturer</DeviceManufacturer>
          <DeviceDiscounts />
        </Hidden>
        <DeviceColor>
          <div>Pick your device color</div>
          <DeviceColorListing />
        </DeviceColor>
        <DeviceCapacity>
          <div>Pick your device capacity</div>
          <DeviceCapacityListing />
        </DeviceCapacity>
      </DeviceShit>
      <ProductDescription>
        <DeviceRating />
        <DeviceDescription>The iPhone X is Apple’s latest attempt at a near bezel-less device and a minor failure as far as that goes. The device is disgraced by a thick and weird notch, a trend that for some inexplicable reason scores of phone manufactureres seem to have copied. We thouroughly dislike this phone but feel you should buy it anyway because we’ll make money.</DeviceDescription>
        <div>Device specifications</div>
      </ProductDescription>
    </PageSection>
  );
};

export default ProductPageCustomise;
