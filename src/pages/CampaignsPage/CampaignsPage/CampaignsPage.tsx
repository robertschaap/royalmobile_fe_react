import React from 'react';

import Banner from '../../../components/Banner';
import { GridBase } from '../../../components/Grid';
import PageSection from '../../../components/PageSection';
import SectionHeader from '../../../components/SectionHeader';

import * as S from './campaigns-page.styles';

const CampaignsPage: React.FC = () => {
  return (
    <PageSection>
      <Banner />
      <SectionHeader>Fat Freaking Discounts through January</SectionHeader>
      <GridBase>
        <S.PaddedGridItem md={2} lg={2}>
          <p>They’re back, our annual Fat Freaking Discounts. Once a year we put a selection of our phones on sale with high discounts, throughout an entire month.</p>
          <p>This year, our selection is even more limited than other years and to top it all off, we’ve chosen to only present it to a very select number of our customers.</p>
          <p>If you’re one of the lucky ones seeing the “triple-sale” banners showing near any phone, why not click through and have a look.</p>
          <p>This promotion lasts through January.</p>
        </S.PaddedGridItem>
        <S.PaddedGridItem md={2} lg={2}>
          <S.UL>
            <S.LI><span>Sale</span></S.LI>
            <S.LI><span>Sale</span></S.LI>
            <S.LI><span>Sale</span></S.LI>
          </S.UL>
        </S.PaddedGridItem>
      </GridBase>
    </PageSection>
  );
};

export default CampaignsPage;
