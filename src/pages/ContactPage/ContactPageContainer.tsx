import React from 'react';
import { ContentUtil } from '../../utils/ContentUtil';

import ContactPage from '../../components/ContactPage';
import PageTitle from '../../components/PageTitle';

const ContactPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.contact')} />
      <ContactPage />
    </>
  );
};

export default ContactPageContainer;
