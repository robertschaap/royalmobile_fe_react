import React from 'react';
import { useContentCopy } from '../../hooks';

import HelpPage from './HelpPage';
import PageTitle from '../../components/PageTitle';

const HelpPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={useContentCopy('pages.help')} />
      <HelpPage />
    </>
  );
};

export default HelpPageContainer;
