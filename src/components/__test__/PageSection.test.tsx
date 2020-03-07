import React from 'react';
import PageSection from '../PageSection';

import { renderWithProviders } from '../../test/helpers';

describe('<PageSection />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<PageSection />);
  });
});
