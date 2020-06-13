import React from 'react';
import * as S from './help-page.styles';
import routes from '../../../constants/routes';
import { useContentCopy } from '../../../hooks';

import { GridBase } from '../../../components/Grid';
import Link from '../../../components/Link';
import PageSection from '../../../components/PageSection';
import SectionHeader from '../../../components/SectionHeader';

const HelpPage: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>{useContentCopy('pages.help')}</SectionHeader>
      <GridBase>
        <S.Section md={2} lg={2}>
          <p>If you need help with anything, please feel free to visit our <Link to={routes.CONTACT_PAGE}>contact page</Link>.</p>
        </S.Section>
      </GridBase>
    </PageSection>
  );
};

export default HelpPage;
