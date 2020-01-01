import React from 'react';
import HelpPageContainer from '../../containers/HelpPageContainer';

import { renderWithProviders } from '../helpers';

describe('<HelpPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<HelpPageContainer />);
  });
});
