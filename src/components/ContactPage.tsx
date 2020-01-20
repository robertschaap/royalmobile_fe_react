import React from 'react';
import styled from 'styled-components';

import PageSection from './PageSection';
import SectionHeader from './SectionHeader';
import { GridBase, GridItem } from './Grid';

const ContactInfo = styled(GridItem)`
  padding-left: ${({ theme }) => theme.spacing(4)};
`;

const ContactPage = () => {
  return (
    <PageSection>
      <SectionHeader>Contact Us</SectionHeader>
      <GridBase>
        <ContactInfo md={2} lg={2}>
          <p>We can’t have you contacting us directly because phone lines cost money to operate, but feel free to drop by in one of our stores or reach out to us on social media.</p>
        </ContactInfo>
      </GridBase>
    </PageSection>
  );
};

export default ContactPage;
