import React from 'react';
import ConsumerPage from './ConsumerPage';

import { renderWithProviders } from '../../test/helpers';

describe('<ConsumerPage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ConsumerPage />);
  });
});
