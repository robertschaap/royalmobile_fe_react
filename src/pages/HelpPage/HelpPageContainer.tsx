import React from 'react';

import HelpPage from './HelpPage';
import PageTitle from '../../components/PageTitle';

const HelpPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page="Help" />
      <HelpPage />
    </>
  );
};

export default HelpPageContainer;
