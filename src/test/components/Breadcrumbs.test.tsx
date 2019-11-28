import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';

import { renderWithProviders } from '../helpers';

describe('<Breadcrumbs />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Breadcrumbs />);
  });
});
