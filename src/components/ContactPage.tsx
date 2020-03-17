import React from 'react';
import styled from 'styled-components';
import { useContentCopy } from '../hooks';

import { GridBase, GridItem } from './Grid';
import ExternalLink from './ExternalLink';
import IconFacebook from './IconFacebook';
import IconLinkedIn from './IconLinkedIn';
import IconTwitter from './IconTwitter';
import PageSection from './PageSection';
import SectionHeader from './SectionHeader';

const ContactInfo = styled(GridItem)`
  padding-left: ${({ theme }) => theme.spacing(4)};
`;

const SocialIcons = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const SocialIcon = styled(ExternalLink)`
  width: 32px;
  height: 32px;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 8px;
  margin-right: ${({ theme }) => theme.spacing(2)};
  display: flex;

  > svg {
    width: 100%;
  }
`;

const ContactPage: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>{useContentCopy('contact.contactUs')}</SectionHeader>
      <GridBase>
        <ContactInfo md={2} lg={2}>
          <p>We can’t have you contacting us directly because phone lines cost money to operate, but feel free to drop by in one of our stores or reach out to us on social media.</p>
          <SocialIcons>
            <li><SocialIcon href="https://www.twitter.com/royalmobile"><IconTwitter /></SocialIcon></li>
            <li><SocialIcon href="https://www.facebook.com/royalmobile"><IconFacebook /></SocialIcon></li>
            <li><SocialIcon href="https://www.linkedin.com/in/royalmobile"><IconLinkedIn /></SocialIcon></li>
          </SocialIcons>
        </ContactInfo>
      </GridBase>
    </PageSection>
  );
};

export default ContactPage;
