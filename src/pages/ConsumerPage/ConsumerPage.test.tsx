import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import ConsumerPage from './ConsumerPage';

describe('<ConsumerPage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ConsumerPage />);
  });
});
