import React from 'react';

import { GridBase } from '../../components/Grid';
import { IconFacebook, IconLinkedIn, IconTwitter } from '../../components/Icons';
import PageSection from '../../components/PageSection';
import PageTitle from '../../components/PageTitle';
import SectionHeader from '../../components/SectionHeader';
import { ContentUtil } from '../../utils/ContentUtil';

import * as S from './contact-page.styles';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.contact')} />
      <PageSection>
        <SectionHeader>{ContentUtil('contact.contactUs')}</SectionHeader>
        <GridBase>
          <S.ContactInfo md={2} lg={2}>
            <p>{ContentUtil('contact.info')}</p>
            <S.SocialIcons>
              <li><S.SocialIcon href="https://www.twitter.com/royalmobile"><IconTwitter /></S.SocialIcon></li>
              <li><S.SocialIcon href="https://www.facebook.com/royalmobile"><IconFacebook /></S.SocialIcon></li>
              <li><S.SocialIcon href="https://www.linkedin.com/in/royalmobile"><IconLinkedIn /></S.SocialIcon></li>
            </S.SocialIcons>
          </S.ContactInfo>
        </GridBase>
      </PageSection>
    </>
  );
};

export default ContactPage;
