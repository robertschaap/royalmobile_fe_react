import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import Breadcrumbs from '.';

describe('<Breadcrumbs />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Breadcrumbs />);
  });
});
