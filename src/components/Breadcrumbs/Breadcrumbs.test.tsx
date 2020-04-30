import React from 'react';
import Breadcrumbs from './Breadcrumbs';

import { renderWithProviders } from '../../test/helpers';

describe('<Breadcrumbs />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Breadcrumbs />);
  });
});
