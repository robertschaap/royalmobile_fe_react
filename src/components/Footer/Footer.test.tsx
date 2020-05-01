import React from 'react';
import Footer from '.';

import { renderWithProviders } from '../../test/helpers';

describe('<Footer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Footer />);
  });
});
