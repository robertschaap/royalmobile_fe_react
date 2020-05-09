import React from 'react';
import HomePageContainer from './HomePageContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<HomePageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<HomePageContainer />);
  });
});
