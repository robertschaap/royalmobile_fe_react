import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import RootLayout from '.';

describe('<RootLayout />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<RootLayout>""</RootLayout>);
  });
});
