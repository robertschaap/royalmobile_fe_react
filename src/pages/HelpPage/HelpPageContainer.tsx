import React from 'react';
import { ContentUtil } from '../../utils/ContentUtil';

import HelpPage from './HelpPage';
import PageTitle from '../../components/PageTitle';

const HelpPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.help')} />
      <HelpPage />
    </>
  );
};

export default HelpPageContainer;
