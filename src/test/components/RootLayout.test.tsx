import React from 'react';
import RootLayout from '../../components/RootLayout';

import { renderWithProviders } from '../helpers';

describe('<RootLayout />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<RootLayout>""</RootLayout>);
  });
});
