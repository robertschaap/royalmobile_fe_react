import React from 'react';
import styled from 'styled-components';
import routes from '../constants/routes';

import { GridBase, GridItem } from './Grid';
import Link from './Link';
import PageSection from './PageSection';
import SectionHeader from './SectionHeader';

const Section = styled(GridItem)`
  padding: 0 ${({ theme }) => theme.spacing(4)};
`;

const HelpPage: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>Help</SectionHeader>
      <GridBase>
        <Section md={2} lg={2}>
          <p>If you need help with anything, please feel free to visit our <Link to={routes.CONTACT_PAGE}>contact page</Link>.</p>
        </Section>
      </GridBase>
    </PageSection>
  );
};

export default HelpPage;
