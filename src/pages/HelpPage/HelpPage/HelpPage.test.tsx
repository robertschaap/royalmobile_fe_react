import React from 'react';
import HelpPage from '.';

import { renderWithProviders } from '../../../test/helpers';

describe('<HelpPage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<HelpPage />);
  });
});
