import React from 'react';

import { renderWithProviders } from '../test/helpers';

import RootContainer from './RootContainer';

describe('<RootContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<RootContainer />);
  });
});
