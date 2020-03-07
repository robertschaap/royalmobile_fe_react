import React from 'react';
import HelpPageContainer from '../HelpPageContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<HelpPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<HelpPageContainer />);
  });
});
