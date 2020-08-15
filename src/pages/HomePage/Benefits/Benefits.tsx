import React from 'react';

import { GridBase, GridItem } from '../../../components/Grid';
import PageSection from '../../../components/PageSection';
import { ContentUtil } from '../../../utils/ContentUtil';

import * as S from './benefits.styles';

const Benefits: React.FC = () => {
  return (
    <PageSection>
      <GridBase>
        <GridItem
          md={2}
          lg={2}>
          <S.BenefitsItem>
            <S.BenefitsItemCallout>{ContentUtil('benefits.get')}</S.BenefitsItemCallout>
            <S.BenefitsItemDescription>
              {ContentUtil('benefits.threeMonthsFree')}
            </S.BenefitsItemDescription>
          </S.BenefitsItem>
        </GridItem>
        <GridItem
          md={2}
          lg={2}>
          <S.BenefitsItem>
            <S.BenefitsItemCallout>{ContentUtil('benefits.get')}</S.BenefitsItemCallout>
            <S.BenefitsItemDescription>
              {ContentUtil('benefits.doubleData')}
            </S.BenefitsItemDescription>
          </S.BenefitsItem>
        </GridItem>
      </GridBase>
    </PageSection>
  );
};

export default Benefits;
