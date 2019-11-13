import React from 'react';
import styled from 'styled-components';

const BannerBase = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Banner: React.FC = () => {
  return (
    <BannerBase>
      <span>Fat Freaking Discounts</span>
      <span>SALE</span>
    </BannerBase>
  );
};

export default Banner;
