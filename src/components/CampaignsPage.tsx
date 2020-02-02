import React from 'react';
import styled from 'styled-components';

import { media_breakpoint_up } from '../styles/theme';

import { GridBase, GridItem } from './Grid';
import Banner from './Banner';
import PageSection from './PageSection';
import SectionHeader from './SectionHeader';

const PaddedGridItem = styled(GridItem)`
  padding: 0 ${({ theme }) => theme.spacing(4)};

  > p:first-of-type {
    margin-top: 0;
  }
`;

const UL = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${media_breakpoint_up.md} {
    flex-direction: column;
  }
`;

const LI = styled.li`
  margin-bottom: 6px;

  > span {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    display: inline-block;
    padding: 0 ${({ theme }) => theme.spacing(2)};
    margin-right: 6px;
  }

  ${media_breakpoint_up.md} {
    > span {
      font-size: 48px;
    }
  }
`;

const CampaignsPage: React.FC = () => {
  return (
    <PageSection>
      <Banner />
      <SectionHeader>Fat Freaking Discounts through January</SectionHeader>
      <GridBase>
        <PaddedGridItem md={2} lg={2}>
          <p>They’re back, our annual Fat Freaking Discounts. Once a year we put a selection of our phones on sale with high discounts, throughout an entire month.</p>
          <p>This year, our selection is even more limited than other years and to top it all off, we’ve chosen to only present it to a very select number of our customers.</p>
          <p>If you’re one of the lucky ones seeing the “triple-sale” banners showing near any phone, why not click through and have a look.</p>
          <p>This promotion lasts through January.</p>
        </PaddedGridItem>
        <PaddedGridItem md={2} lg={2}>
          <UL>
            <LI><span>Sale</span></LI>
            <LI><span>Sale</span></LI>
            <LI><span>Sale</span></LI>
          </UL>
        </PaddedGridItem>
      </GridBase>
    </PageSection>
  );
};

export default CampaignsPage;
