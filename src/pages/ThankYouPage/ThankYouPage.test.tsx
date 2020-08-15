import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import ThankYouPage from './ThankYouPage';

describe('<ThankYouPage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ThankYouPage />);
  });
});
