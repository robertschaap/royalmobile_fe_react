import React from 'react';
import * as S from './benefits.styles';
import { useContentCopy } from '../../hooks';

import { GridBase, GridItem } from '../Grid';
import PageSection from '../PageSection';

const Benefits: React.FC = () => {
  return (
    <PageSection>
      <GridBase>
        <GridItem
          md={2}
          lg={2}>
          <S.BenefitsItem>
            <S.BenefitsItemCallout>{useContentCopy('benefits.get')}</S.BenefitsItemCallout>
            <S.BenefitsItemDescription>
              {useContentCopy('benefits.threeMonthsFree')}
            </S.BenefitsItemDescription>
          </S.BenefitsItem>
        </GridItem>
        <GridItem
          md={2}
          lg={2}>
          <S.BenefitsItem>
            <S.BenefitsItemCallout>{useContentCopy('benefits.get')}</S.BenefitsItemCallout>
            <S.BenefitsItemDescription>
              {useContentCopy('benefits.doubleData')}
            </S.BenefitsItemDescription>
          </S.BenefitsItem>
        </GridItem>
      </GridBase>
    </PageSection>
  );
};

export default Benefits;
