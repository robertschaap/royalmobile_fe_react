import React from 'react';
import ErrorPageContainer from './ErrorPageContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<ErrorPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ErrorPageContainer />);
  });
});
