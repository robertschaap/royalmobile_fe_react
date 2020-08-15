import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import NavigationSmall from '.';

describe('<NavigationSmall />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<NavigationSmall />);
  });
});
