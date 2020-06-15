import React from 'react';
import { useContentCopy } from '../../utils/useContentCopy';

import ContactPage from '../../components/ContactPage';
import PageTitle from '../../components/PageTitle';

const ContactPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={useContentCopy('pages.contact')} />
      <ContactPage />
    </>
  );
};

export default ContactPageContainer;
