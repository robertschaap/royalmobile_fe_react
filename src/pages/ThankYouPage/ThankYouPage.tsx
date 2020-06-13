import React from 'react';
import * as S from './thank-you-page.styles';

import PageSection from '../../components/PageSection';
import PageTitle from '../../components/PageTitle';
import SectionHeader from '../../components/SectionHeader';
import { GridBase, GridItem } from '../../components/Grid';

const ThankYouPage: React.FC = () => {
  return (
    <>
      <PageTitle page="Thank you" />
      <PageSection>
        <SectionHeader>Thank you</SectionHeader>
        <GridBase>
          <GridItem md={2} lg={2}>
            <S.Paragraph>That completes your order. You'll shortly receive a confirmation email.</S.Paragraph>
          </GridItem>
        </GridBase>
      </PageSection>
    </>
  );
};

export default ThankYouPage;
