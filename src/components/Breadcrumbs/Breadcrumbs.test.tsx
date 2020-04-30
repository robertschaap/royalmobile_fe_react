import React from 'react';
import Breadcrumbs from '.';

import { renderWithProviders } from '../../test/helpers';

describe('<Breadcrumbs />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Breadcrumbs />);
  });
});
