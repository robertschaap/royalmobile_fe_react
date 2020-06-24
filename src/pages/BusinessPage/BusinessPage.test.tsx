import React from 'react';
import BusinessPage from './BusinessPage';

import { renderWithProviders } from '../../test/helpers';

describe('<BusinessPage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<BusinessPage />);
  });
});
