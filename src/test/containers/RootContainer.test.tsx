import React from 'react';
import RootContainer from '../../containers/RootContainer';

import { renderWithProviders } from '../helpers';

describe('<RootContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<RootContainer>""</RootContainer>);
  });
});
