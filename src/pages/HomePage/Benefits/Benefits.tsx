import React from 'react';
import * as S from './benefits.styles';
import { ContentUtil } from '../../../utils/ContentUtil';

import { GridBase, GridItem } from '../../../components/Grid';
import PageSection from '../../../components/PageSection';

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
