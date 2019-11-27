import React from 'react';
import HomePageContainer from '../../containers/HomePageContainer';

import { renderWithProviders } from '../helpers';

describe('<HomePageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<HomePageContainer>""</HomePageContainer>);
  });
});
