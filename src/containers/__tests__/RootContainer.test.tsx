import React from 'react';
import RootContainer from '../RootContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<RootContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<RootContainer />);
  });
});
