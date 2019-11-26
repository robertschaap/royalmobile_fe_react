import React from 'react';
import NavigationSmall from '../../components/NavigationSmall';

import { renderWithProviders } from '../helpers';

describe('<NavigationSmall />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<NavigationSmall />);
  });
});
