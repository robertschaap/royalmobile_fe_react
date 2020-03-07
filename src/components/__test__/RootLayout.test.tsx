import React from 'react';
import RootLayout from '../RootLayout';

import { renderWithProviders } from '../../test/helpers';

describe('<RootLayout />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<RootLayout>""</RootLayout>);
  });
});