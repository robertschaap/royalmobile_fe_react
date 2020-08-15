import React from 'react';

import { renderWithProviders } from '../../../test/helpers';

import HelpPage from '.';

describe('<HelpPage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<HelpPage />);
  });
});
