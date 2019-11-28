import React from 'react';
import PageSection from '../../components/PageSection';

import { renderWithProviders } from '../helpers';

describe('<PageSection />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<PageSection />);
  });
});
