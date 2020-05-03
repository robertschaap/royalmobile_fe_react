import React from 'react';
import * as S from './contact-page.styles';
import { useContentCopy } from '../../hooks';

import { GridBase } from '../Grid';
import IconFacebook from '../IconFacebook';
import IconLinkedIn from '../IconLinkedIn';
import IconTwitter from '../IconTwitter';
import PageSection from '../PageSection';
import SectionHeader from '../SectionHeader';

const ContactPage: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>{useContentCopy('contact.contactUs')}</SectionHeader>
      <GridBase>
        <S.ContactInfo md={2} lg={2}>
          <p>We can’t have you contacting us directly because phone lines cost money to operate, but feel free to drop by in one of our stores or reach out to us on social media.</p>
          <S.SocialIcons>
            <li><S.SocialIcon href="https://www.twitter.com/royalmobile"><IconTwitter /></S.SocialIcon></li>
            <li><S.SocialIcon href="https://www.facebook.com/royalmobile"><IconFacebook /></S.SocialIcon></li>
            <li><S.SocialIcon href="https://www.linkedin.com/in/royalmobile"><IconLinkedIn /></S.SocialIcon></li>
          </S.SocialIcons>
        </S.ContactInfo>
      </GridBase>
    </PageSection>
  );
};

export default ContactPage;
