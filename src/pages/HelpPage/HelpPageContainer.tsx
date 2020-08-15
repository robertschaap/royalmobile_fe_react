import React from 'react';

import PageTitle from '../../components/PageTitle';
import { ContentUtil } from '../../utils/ContentUtil';

import HelpPage from './HelpPage';

const HelpPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.help')} />
      <HelpPage />
    </>
  );
};

export default HelpPageContainer;
