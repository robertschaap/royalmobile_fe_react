import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import HomePageContainer from './HomePageContainer';

describe('<HomePageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<HomePageContainer />);
  });
});
