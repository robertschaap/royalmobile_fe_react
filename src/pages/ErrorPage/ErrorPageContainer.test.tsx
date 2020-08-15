import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import ErrorPageContainer from './ErrorPageContainer';

describe('<ErrorPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ErrorPageContainer />);
  });
});
