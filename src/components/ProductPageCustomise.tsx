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
import { media_breakpoint_up } from '../styles/theme';

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

const ProductPageCustomise: React.FC = () => {
  const deviceName = 'iPhone X 16gb Lime';
  const deviceManufacturer = 'Apple';
  const deviceCost = '265,-';

  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.customiseDevice')}</SectionHeader>
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
            <div>Pick your device color</div>
            <DeviceColorListing />
          </DeviceColor>
          <DeviceCapacity>
            <div>Pick your device capacity</div>
            <DeviceCapacityListing />
          </DeviceCapacity>
          <div>Phone cost upfront</div>
          <DeviceCost>{deviceCost}</DeviceCost>
        </DeviceCustomisationOptions>

        <ProductDescription>
          <DeviceRating />
          <DeviceDescription>The iPhone X is Apple’s latest attempt at a near bezel-less device and a minor failure as far as that goes. The device is disgraced by a thick and weird notch, a trend that for some inexplicable reason scores of phone manufactureres seem to have copied. We thouroughly dislike this phone but feel you should buy it anyway because we’ll make money.</DeviceDescription>
          <div>Device specifications</div>
        </ProductDescription>

      </Flexy>
    </PageSection>
  );
};

export default ProductPageCustomise;
