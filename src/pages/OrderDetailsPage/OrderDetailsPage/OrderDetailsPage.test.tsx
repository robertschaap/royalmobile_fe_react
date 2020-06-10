import React from 'react';
import OrderDetailsPage from '.';

import { renderWithTheme } from '../../../test/helpers';

describe('<OrderDetailsPage />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<OrderDetailsPage />);
  });
});
