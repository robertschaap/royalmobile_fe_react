import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import HelpPageContainer from './HelpPageContainer';

describe('<HelpPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<HelpPageContainer />);
  });
});
