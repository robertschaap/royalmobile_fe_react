import React from 'react';
import Footer from '../../components/Footer';

import { renderWithProviders } from '../helpers';

describe('<Footer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Footer />);
  });
});
