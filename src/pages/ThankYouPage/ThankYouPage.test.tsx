import React from 'react';
import ThankYouPage from './ThankYouPage';

import { renderWithProviders } from '../../test/helpers';

describe('<ThankYouPage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ThankYouPage />);
  });
});
