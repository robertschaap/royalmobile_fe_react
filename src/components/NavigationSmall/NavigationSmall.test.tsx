import React from 'react';
import NavigationSmall from '.';

import { renderWithProviders } from '../../test/helpers';

describe('<NavigationSmall />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<NavigationSmall />);
  });
});
