import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import BusinessPage from './BusinessPage';

describe('<BusinessPage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<BusinessPage />);
  });
});
