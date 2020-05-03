import React from 'react';
import routes from '../../constants/routes';

import { GridBase } from '../Grid';
import Link from '../Link';
import PageSection from '../PageSection';
import SectionHeader from '../SectionHeader';

const HelpPage: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>Help</SectionHeader>
      <GridBase>
        <S.Section md={2} lg={2}>
          <p>If you need help with anything, please feel free to visit our <Link to={routes.CONTACT_PAGE}>contact page</Link>.</p>
        </S.Section>
      </GridBase>
    </PageSection>
  );
};

export default HelpPage;
