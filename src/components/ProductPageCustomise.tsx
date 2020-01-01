import React from 'react';
import styled from 'styled-components';

import DeviceCapacityListing from './DeviceCapacityListing';
import DeviceColorListing from './DeviceColorListing';
import DeviceRating from './DeviceRating';
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

const DeviceDiscounts = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const DeviceDiscountItem = styled.li`
  margin-bottom: 6px;

  > span {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    display: inline-block;
    padding: 0 ${({ theme }) => theme.spacing(2)};
  }
`;

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
        <div>
          <DeviceName>Device name</DeviceName>
          <DeviceManufacturer>Device manufacturer</DeviceManufacturer>
          <DeviceDiscounts>
            <DeviceDiscountItem>
              <span>Sale</span>
            </DeviceDiscountItem>
            <DeviceDiscountItem>
              <span>Sale</span>
            </DeviceDiscountItem>
            <DeviceDiscountItem>
              <span>Sale</span>
            </DeviceDiscountItem>
          </DeviceDiscounts>
        </div>
      </Card>
      <DeviceShit>
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
