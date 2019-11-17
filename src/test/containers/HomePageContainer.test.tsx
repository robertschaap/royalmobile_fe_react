import React from 'react';
import HomePageContainer from '../../containers/HomePageContainer';

import { renderWithTheme } from '../helpers';

describe('<HomePageContainer />', () => {
  it('renders without crashing', () => {
    renderWithTheme(<HomePageContainer>""</HomePageContainer>);
  });
});
