import React from 'react';

import ContactPage from '../../components/ContactPage';
import PageTitle from '../../components/PageTitle';

const ContactPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page="Contact" />
      <ContactPage />
    </>
  );
};

export default ContactPageContainer;
